import './App.css'
import Loader from './Loader'

function App() {

  return (
    <>
      <div>
      <h2>Default Loader</h2>
      <Loader />

      <h2>Circle Loader</h2>
      <Loader shape="circle" width="50px" height="50px" />

      <h2>Custom Layout Loader</h2>
      <Loader
        layout={[
          { shape: 'rectangle', width: '100%', height: '20px' },
          { shape: 'circle', width: '50px', height: '50px' },
          { shape: 'rectangle', width: '80%', height: '15px' },
        ]}
        // theme="dark"
        speed={1.5}
      />
    </div>
    </>
  )
}

export default App
