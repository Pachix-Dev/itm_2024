import axios from 'axios'
import fs from 'fs'
import XLSX from 'xlsx'

const stage1Url = 'https://docs.google.com/spreadsheets/d/1UAv8ks-qMtPMEUhJDU0cR6U-KcGhmapm/export?format=xlsx&id=1UAv8ks-qMtPMEUhJDU0cR6U-KcGhmapm'
const stage2Url = 'https://docs.google.com/spreadsheets/d/1P6NcH9QY5yCQIB1A2yXpmAjtINqGNMMX/export?format=xlsx&id=1P6NcH9QY5yCQIB1A2yXpmAjtINqGNMMX'

const stage1Path = 'scripts/stage1.xlsx'
const stage2Path = 'scripts/stage2.xlsx'

const main = async () => {

  // Download files from Google Sheets
  try {
    await downloadFile(stage1Url, stage1Path)
    await downloadFile(stage2Url, stage2Path)
  } catch (error) {
    console.error('error downloading files: ', error)
  }

  // Convert Excel files to JSON
  const jsonData = getJsonData()
  // Create JSON file with the data in src/data/program.json
  createTSFile(jsonData)

  // Delete downloaded files
  deleteFile(stage1Path)
  deleteFile(stage2Path)
}

main()

async function downloadFile(url, outputPath) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  })

  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(outputPath)
    response.data.pipe(writer)

    writer.on('finish', () => {
      console.log(`File ${outputPath} has been downloaded`)
      resolve()
    })
    writer.on('error', reject)
  })
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error while deleting file:', err)
    } else {
      console.log(`File ${filePath} has been deleted`)
    }
  })
}

function getJsonData() {
  const workbook1 = XLSX.readFile(stage1Path, { cellStyles: true })
  const workbook2 = XLSX.readFile(stage2Path, { cellStyles: true })
  const sheetNames1 = workbook1.SheetNames
  const sheetNames2 = workbook2.SheetNames

  const json1 = sheetToJson(workbook1.Sheets[sheetNames1[0]], {
    title: 'C',
    description: 'I',
    time: 'F',
    duration: 'D',
    speakers: 'G'
  })
  const json2 = sheetToJson(workbook1.Sheets[sheetNames1[1]], {
    title: 'C',
    description: 'I',
    time: 'F',
    duration: 'D',
    speakers: 'G'
  })
  const json3 = sheetToJson(workbook1.Sheets[sheetNames1[2]], {
    title: 'C',
    description: 'I',
    time: 'F',
    duration: 'D',
    speakers: 'G'
  })
  const json4 = sheetToJson(workbook2.Sheets[sheetNames2[0]], {
    title: 'C',
    description: 'J',
    time: 'E',
    duration: 'D',
    speakers: 'G'
  })
  const json5 = sheetToJson(workbook2.Sheets[sheetNames2[1]], {
    title: 'C',
    description: null,
    time: 'E',
    duration: 'D',
    speakers: 'F'
  })
  const json6 = sheetToJson(workbook2.Sheets[sheetNames2[2]], {
    title: 'C',
    description: null,
    time: 'E',
    duration: 'D',
    speakers: 'F'
  })

  return [json1, json2, json3, json4, json5, json6]
}

function formatTime(decimalTime) {
  const hours = Math.floor(decimalTime * 24)
  const minutes = Math.floor((decimalTime * 24 - hours) * 60)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} hrs`
}

function checkCells(cells, sheet) {
  return cells.some(cell => {
    const cellValue = sheet[cell] ? sheet[cell].v : undefined
    return cellValue !== undefined
  })
}

function sheetToJson(sheet, columns) {
  const jsonData = []
  let row = 8
  let cells = [
    'B' + row,
    'C' + row,
    'D' + row,
    'E' + row,
    'F' + row,
    'G' + row,
    'H' + row,
    'I' + row,
    'J' + row
  ]

  while (checkCells(cells, sheet)) {
    const cell = sheet['C' + row]
    if (cell && cell.s && cell.s.bgColor && cell.s.bgColor.rgb === '00FF00') {
      const speakers = []

      if (sheet[columns.speakers + row] && sheet[columns.speakers + row].v) {
        const speaker = sheet[columns.speakers + row].v.split(', ')
        speakers.push({
          name: speaker[0],
          position: speaker[1] ? speaker[1].charAt(0).toUpperCase() + speaker[1].slice(1) : '',
          company: '',
          image: '/profile.svg'
        })
      }
      const rowData = {
        title: sheet[columns.title + row] ? sheet[columns.title + row].v : '',
        description: sheet[columns.description + row] ? sheet[columns.description + row].v || '' : '',
        time: formatTime(sheet[columns.time + row].v) || '',
        duration: sheet[columns.duration + row] ? sheet[columns.duration + row].v : '',
        speakers: speakers
      }
      jsonData.push(rowData)
    }
    row++
    cells = cells.map(cell => cell[0] + row)
  }

  return jsonData
}

function createTSFile(jsons) {
  const data = `interface Speaker {
    name: string;
    position: string;
    company: string;
    image?: string;
}

interface Program {
    title: string;
    description: string;
    time: string;
    duration: string;
    speakers: Speaker[];
}

const stage_1_day_1: Program[] = ${JSON.stringify(jsons[0], null, 4)}

const stage_1_day_2: Program[] = ${JSON.stringify(jsons[1], null, 4)}

const stage_1_day_3: Program[] = ${JSON.stringify(jsons[2], null, 4)}

const stage_2_day_1: Program[] = ${JSON.stringify(jsons[3], null, 4)}

const stage_2_day_2: Program[] = ${JSON.stringify(jsons[4], null, 4)}

const stage_2_day_3: Program[] = ${JSON.stringify(jsons[5], null, 4)}

export default [
    {
        day: 1,
        stage: 1,
        conferences: stage_1_day_1,
    },
    {
        day: 2,
        stage: 1,
        conferences: stage_1_day_2,
    },
    {
        day: 3,
        stage: 1,
        conferences: stage_1_day_3,
    },
    {
        day: 1,
        stage: 2,
        conferences: stage_2_day_1,
    },
    {
        day: 2,
        stage: 2,
        conferences: stage_2_day_2,
    },
    {
        day: 3,
        stage: 2,
        conferences: stage_2_day_3,
    },
];`.replace(/\n/g, '\r\n');
  fs.writeFileSync('src/data/constans_program.ts', data)
}