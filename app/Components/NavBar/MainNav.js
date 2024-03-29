import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
export default function SbMain() {
  return (
    <div className="flex justify-between items-center mx-5 py-5">
      <a href='/' className="">Logo</a>
      <div className="flex justify-between items-center">
        <a href='/' className="mx-5">Home</a>
        <a href='/products' className="mx-5">All products</a>
        <a href='/products/phone' className="mx-5">Phone</a>
        <a href='/products/tablets' className="mx-5">Tablet</a>
        <a href='/products/tv' className="mx-5">TV</a>
        <a href='/products/accessories' className="mx-5">Accessories</a>
        <a href='/about' className="mx-5">About</a>
      </div>
      <div className="flex justify-between text-gray-500">
        <LocalShippingOutlinedIcon className='mr-8' />
        <ShoppingBagOutlinedIcon className='mr-8' />
        <AccountCircleOutlinedIcon className='' />
      </div>
    </div>
  );
}