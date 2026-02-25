import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "./resume";

function App() {

  return (
    <PDFViewer style={{ width: '100vw', height: '100vh', border: 'none' }}>
      <Resume />
    </PDFViewer>
  )
}

export default App
