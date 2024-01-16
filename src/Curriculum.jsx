
import { LeftColumn } from './components/LeftColumn'
import { RightColumn } from './components/RightColumn'
import { ScrollToTop } from './components/ScrollToTop'
import './Styles.css'

function Curriculum() {
  return (
    <div className="background lightGray">
      <div className="container-md mt-4">
        <div className="row mb-3 bor">
          <LeftColumn></LeftColumn>
          <RightColumn></RightColumn>
        </div>
      </div>
      <ScrollToTop></ScrollToTop>
    </div>
  )
}

export default Curriculum
