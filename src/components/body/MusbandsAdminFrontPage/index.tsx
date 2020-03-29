import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Create browser history
const history = createBrowserHistory()

// Functional component for header app.
export class MusbandsAdminFrontPage extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <div className="flex flex-wrap mb-4">
              <div className="w-full bg-gray-500 h-12">
                <h1 className="font-semibold">Musbands Admin Tables</h1>
              </div>
            </div>
            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 h-12">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                  <div className="musbands-css-body-frontpage-card1-background h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Function Member">
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm font-bold text-xl text-black-600 flex items-center">Function Member</p>
                      <p className="text-gray-700 text-base">Describe the roles of members within a music band.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-12">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                  <div className="musbands-css-body-frontpage-card2-background h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Function Member Synonymic">
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm font-bold text-xl text-black-600 flex items-center">Function Member Synonymic</p>
                      <p className="text-gray-700 text-base">Synonyms of function members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 h-12">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                  <div className="musbands-css-body-frontpage-card3-background h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Musical Genre">
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm font-bold text-xl text-black-600 flex items-center">Instrument</p>
                      <p className="text-gray-700 text-base">A musical instrument is a device created or adapted to make musical sounds. In principle, any object that produces sound can be considered a musical instrument—it is through purpose that the object becomes a musical instrument. The history of musical instruments dates to the beginnings of human culture. Early musical instruments may have been used for ritual, such as a horn to signal success on the hunt, or a drum in a religious ceremony. Cultures eventually developed composition and performance of melodies for entertainment. Musical instruments evolved in step with changing applications and technologies.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-12">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                  <div className="musbands-css-body-frontpage-card4-background h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Musical Genre">
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm font-bold text-xl text-black-600 flex items-center">Musical Genre</p>
                      <p className="text-gray-700 text-base">A music genre is a conventional category that identifies some pieces of music as belonging to a shared tradition or set of conventions. It is to be distinguished from musical form and musical style, although in practice these terms are sometimes used interchangeably.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default MusbandsAdminFrontPage
