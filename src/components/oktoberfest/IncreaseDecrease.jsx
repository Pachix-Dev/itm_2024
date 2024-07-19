export function IncreaseDecrease() {
  return (
    <>
      <div className='mt-2'>
        <button
          onClick={() => handleQuantity(item.quantity - 1)}
          type='button'
          className='border-2 rounded-s-lg px-2 leading-[initial] border-gray-300 font-bold'
        >
          -
        </button>
        <span className='border-y-2 px-2  border-gray-300'>
          {item.quantity}
        </span>
        <button
          onClick={() => handleQuantity(item.quantity + 1)}
          type='button'
          className='border-2 rounded-e-lg px-2 leading-[initial] border-gray-300 font-bold'
        >
          +
        </button>
      </div>
    </>
  )
}
