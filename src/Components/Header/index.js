import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Button from '../Button'
import Search from './Search'
import Nav from './Nav'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className=" md:mx-20">
      <nav
        className="mx-auto flex flex-row w-full items-center justify-between p-6 md:px-0"
        aria-label="Global"
      >
        <Search styles="hidden lg:block lg:w-1/3" />

        <div className="flex justify-between lg:justify-center lg:w-1/3">
          <h1 className="font-['Anglecia+Pro+Dsp+Md'] text-[#2B2D42] font-bold text-5xl">.todaynews</h1>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-4 lg:w-1/3">
          {' '}
          <Button
            name="Sign in"
            textColor="text-[#2B2D42] font-bold"
            colorBg=""
            colorBgHover=""
          />
          <Button
            name="Sign Up"
            textColor="text-white"
            colorBg="bg-[#2B2D42]"
            colorBgHover="bg-[#2B2D42]"
          />
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          focus="true"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5">
              <h1 className="">Your Company</h1>
            </div>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href=""
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a> */}
              </div>

              <div className="py-6 mx-auto">
                <Search styles="w-full" />
              </div>

              <div className="py-6 flex flex-column gap-3">
                <Button
                  name="Sign in"
                  textColor="text-black"
                  colorBg="bg-gray-50"
                  colorBgHover="bg-gray-100"
                />
                <Button
                  name="Sign Up"
                  textColor="text-white"
                  colorBg="bg-blue-600"
                  colorBgHover="bg-blue-700"
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Nav />
      <div className="md:hidden relative text-slate-700 font-medium text-xl p-4 ">
        Home
      </div>
    </header>
  )
}
