
import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import AppButton from './components/AppButton'

// import './assets/styles/App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Card
              imgThumb='https://picsum.photos/200/300'
              cardText='First Card'
              readingTime='3'>
              <div className='btn-group'>
                <AppButton
                  text='New'
                  size='sm'
                  className='btn-outline-secondary'
                />
                <AppButton
                  text='Save'
                  size='sm'
                  className='btn-outline-secondary'
                />
                <AppButton
                  text='View'
                  size='sm'
                  className='btn-outline-secondary'
                />
              </div>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card
              imgThumb='https://picsum.photos/200/300'
              cardText='Im not sure what I should be writing here'
              readingTime='12'
            >
              <div className='btn-group'>
                <AppButton
                  text='View'
                  size='sm'
                  className='btn-outline-secondary'
                />
              </div>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card
              imgThumb='https://picsum.photos/200/300 '
              cardText='lorem ipsum one two threee'
              readingTime='20'>
              <div className='btn-group'>
                <AppButton
                  text='View'
                  size='sm'
                  className='btn-outline-secondary'
                />
                <AppButton
                  text='Edit'
                  size='sm'
                  className='btn-outline-secondary'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
