import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

import './App.css'

import Header from './components/Header'
import SlideBar from './components/SlideBar'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    slidesList: initialSlidesList,
    activeSlideTab: initialSlidesList[0],
  }

  onChangeHeading = event => {
    const {slidesList, activeSlideTab} = this.state

    const userInput = event.target.value

    const updatedSlideList = slidesList.map(eachList => {
      if (eachList.id === activeSlideTab.id) {
        return {
          ...eachList,
          heading: userInput,
        }
      }
      return {...eachList}
    })

    const updatedSlide = {
      ...activeSlideTab,
      heading: userInput,
    }

    this.setState({
      slidesList: updatedSlideList,
      activeSlideTab: updatedSlide,
    })
  }

  onChangeParagraph = event => {
    const {slidesList, activeSlideTab} = this.state

    const userInput = event.target.value

    const updatedSlideList = slidesList.map(eachList => {
      if (eachList.id === activeSlideTab.id) {
        return {
          ...eachList,
          description: userInput,
        }
      }
      return {...eachList}
    })

    const updatedSlide = {
      ...activeSlideTab,
      description: userInput,
    }

    this.setState({
      slidesList: updatedSlideList,
      activeSlideTab: updatedSlide,
    })
  }

  onSelectCurrentSlide = id => {
    const {slidesList} = this.state
    const selectedSlide = slidesList.filter(eachList => eachList.id === id)
    this.setState({
      activeSlideTab: selectedSlide[0],
    })
  }

  addNewSlide = () => {
    const {slidesList, activeSlideTab} = this.state

    const index = slidesList.findIndex(eachList => {
      if (eachList.id === activeSlideTab.id) {
        return true
      }
      return false
    })

    const newSlide = {
      id: uuidV4(),
      heading: 'Heading',
      description: 'Description',
    }

    slidesList.splice(index + 1, 0, newSlide)
    console.log(slidesList)

    this.setState({slidesList, activeSlideTab: newSlide})
  }

  onBlurHeading = () => {
    const {activeSlideTab, slidesList} = this.state
    const {heading} = activeSlideTab
    if (heading.length === 0) {
      const updatedSlide = {
        ...activeSlideTab,
        heading: 'Heading',
      }

      const updatedSlideList = slidesList.map(eachList => {
        if (eachList.id === activeSlideTab.id) {
          return {
            ...eachList,
            heading: 'Heading',
          }
        }
        return {...eachList}
      })

      this.setState({
        activeSlideTab: updatedSlide,
        slidesList: updatedSlideList,
      })
    }
  }

  onBlurParagraph = () => {
    const {activeSlideTab, slidesList} = this.state
    const {description} = activeSlideTab
    if (description.length === 0) {
      const updatedSlide = {
        ...activeSlideTab,
        description: 'Description',
      }

      const updatedSlideList = slidesList.map(eachList => {
        if (eachList.id === activeSlideTab.id) {
          return {
            ...eachList,
            description: 'Description',
          }
        }
        return {...eachList}
      })

      this.setState({
        activeSlideTab: updatedSlide,
        slidesList: updatedSlideList,
      })
    }
  }

  render() {
    const {activeSlideTab, slidesList} = this.state
    const {heading, description} = activeSlideTab
    return (
      <div className="container">
        <Header />
        <button type="button" className="new-Button" onClick={this.addNewSlide}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="new-img"
          />
          New
        </button>
        <div className="bottom-container">
          <ol className="ol-container">
            {slidesList.map((eachList, index) => (
              <SlideBar
                key={eachList.id}
                listDetails={eachList}
                onSelectCurrentSlide={this.onSelectCurrentSlide}
                isItSelected={activeSlideTab.id}
                index={index}
              />
            ))}
          </ol>
          <div className="left-container">
            <div className="display-card">
              <input
                type="text"
                value={heading}
                className="currentSlide-Heading"
                onChange={this.onChangeHeading}
                onBlur={this.onBlurHeading}
              />
              <input
                type="text"
                value={description}
                className="currentSlide-paragraph"
                onChange={this.onChangeParagraph}
                onBlur={this.onBlurParagraph}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
