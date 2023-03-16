import { BiSearch } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';

function Navbar() {
	return (
		<div className='container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !py-0 '>
			<nav className='navbar my-6'>
				<div className='flex flex-wrap justify-between md:gap-10 lg:flex-nowrap'>
					<div className='logo flex items-center justify-between w-full lg:w-auto'>
						<img
							src='https://cdn.sanity.io/images/cijrdavx/production/e8fa4f57a95067e838d7aa5a4f80042137d9f5b6-132x52.svg?w=640&q=75&fit=clip&auto=format'
							alt=''
						/>
						<button
							type='button'
							className='px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 '
						>
							<FaBars className='w-6 h-6 fill-current'></FaBars>
						</button>
					</div>
					<div className='flex items-center gap-8 '>
						<div className='flex-col items-center hidden w-full lg:flex lg:flex-row lg:w-auto gap-4'>
							<p className='py-2 px-8 font-medium text-gray-600 hover:text-blue-500 outline-none focus-visible:text-blue-500 focus-visible:ring-2 rounded-full ring-blue-100 cursor-pointer'>
								Home
							</p>
							<p className='py-2 px-8 font-medium text-gray-600 hover:text-blue-500 outline-none focus-visible:text-blue-500 focus-visible:ring-2 rounded-full ring-blue-100 cursor-pointer'>
								About
							</p>
							<p className=' py-2 px-8 font-medium text-gray-600 hover:text-blue-500 outline-none focus-visible:text-blue-500 focus-visible:ring-2 rounded-full ring-blue-100 cursor-pointer'>
								Contact
							</p>
						</div>
						<div className='hidden lg:block'>
							<form action='/search'>
								<div className='relative'>
									<input
										type='text'
										placeholder='Search Blog'
										className='w-full px-3 py-2 border rounded-md outline-none focus:border-gray-300 focus:shadow-sm '
									/>
									<div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
										<BiSearch className='w-4 h-4 text-gray-400'></BiSearch>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
