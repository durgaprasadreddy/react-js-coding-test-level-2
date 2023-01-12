import Image from 'next/image'
import { UserInterface } from 'pages/dashboard'
import React from 'react'

interface DashboardContainerProps {
  user: UserInterface
}

const DashboardContainer = ({ user }: DashboardContainerProps) => {
  return (
    <div className="bg-gray-200 p-4">
      <section className="bg-blueGray-50 pt-16">
        <div className="mx-auto w-full px-4 lg:w-1/2">
          <div className="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4">
                  <div className="relative">
                    <div className="max-w-150-px absolute -m-16 -ml-20 h-auto rounded-full border-none align-middle shadow-xl lg:-ml-16">
                      <Image
                        alt="..."
                        src={user.picture.large}
                        height={130}
                        width={130}
                        className="max-w-150-px rounded-full align-middle"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-20 text-center">
                  <h3 className="text-blueGray-700 mb-2 text-xl font-semibold leading-normal">
                    {user.name.title} {user.name.first} {user.name.last}
                  </h3>
                  <div className="text-blueGray-400 mt-0 mb-2 text-sm font-bold leading-normal">
                    <i className="fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg"></i>
                    {user.location.street.number} {user.location.street.name},{' '}
                    {user.location.city}, {user.location.postcode},{' '}
                    {user.location.state}, {user.location.country}
                  </div>
                </div>
                <div className="mt-10 w-full px-4 pb-12 text-left">
                  <div className="mb-2 flex items-center">
                    <div className="text-blueGray-400 w-80 text-lg">Age: </div>
                    <div>
                      <span className="text-blueGray-600 block text-base font-bold tracking-wide">
                        {user.dob.age}
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center">
                    <div className="text-blueGray-400 w-80 text-lg">
                      Mobile:{' '}
                    </div>
                    <div>
                      <span className="text-blueGray-600 block text-base font-bold tracking-wide">
                        {user.phone}
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center">
                    <div className="text-blueGray-400 w-80 text-lg">
                      Email:{' '}
                    </div>
                    <div>
                      <span className="text-blueGray-600 block text-base font-bold tracking-wide">
                        {user.email}
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center">
                    <div className="text-blueGray-400 w-80 text-lg">
                      Username:{' '}
                    </div>
                    <div>
                      <span className="text-blueGray-600 block text-base font-bold tracking-wide">
                        {user.login.username}
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center">
                    <div className="text-blueGray-400 w-80 text-lg">
                      Registered on:{' '}
                    </div>
                    <div>
                      <span className="text-blueGray-600 block text-base font-bold tracking-wide">
                        {user.registered.date.split('T')[0]}
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center">
                    <div className="text-blueGray-400 w-80 text-lg">
                      Nationality:{' '}
                    </div>
                    <div>
                      <span className="text-blueGray-600 block text-base font-bold tracking-wide">
                        {user.nat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashboardContainer
