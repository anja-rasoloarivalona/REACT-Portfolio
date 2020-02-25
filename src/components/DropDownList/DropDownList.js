import React, { Component } from 'react'
import './DropDownList.css';
import IconSvg from '../../utilities/svg/svg'
import { defineMessages, injectIntl, FormattedMessage  } from 'react-intl'


const defindeMessages = defineMessages({
    french: {
        id: "french",
        defaultMessage: "french"
    },
    english: {
      id: "english",
      defaultMessage: "english"
  }
  })

class DropDownList extends Component {

    state = {
        showList: false
    }

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false)
    }
    
    componentWillUnmount(){
         document.removeEventListener('mousedown', this.handleClick, false)
    }

    toggleList = () => {
        this.setState(prevState => ({
            ...prevState,
            showList: !prevState.showList
        }))
    }

    handleClick = e => {         
        if(this.target && this.target.contains(e.target)){
            return
        } else {
            if(this.state.showList){
                this.toggleList()
            }
            
        }     
    }

    render() {

        let list = this.props.list;
        const {showList} = this.state;
        const {formatMessage } = this.props.intl

        return (
            <div className={`drop-down-list ${showList ? 'show' : ''}`}
                 ref={el => this.target = el}
                 onClick={this.toggleList}>
                    <div className="drop-down-list__value">
                        {/* {this.props.value} */}

                        <FormattedMessage id={this.props.value} defaultMessage={this.props.value}/>

                        <IconSvg icon="arrow-down"/>
                    </div>
                    <ul className={`drop-down-list__list`}>
                    <li className={`drop-down-list__list__item ${this.props.value == 'English' ? 'active':''}`}
                        onClick={() => this.props.selectItemHandler('English')}>
                        <FormattedMessage id="English" defaultMessage="english"/>
                    </li>
                    <li className={`drop-down-list__list__item ${this.props.value == 'French' ? 'active':''}`}
                        onClick={() => this.props.selectItemHandler('French')}>
                        <FormattedMessage id="French" defaultMessage="french"/>
                    </li>
                        {/* {list.map(item => 
                            <li className={`drop-down-list__list__item
                                        ${item.value && this.props.value == item.value ? 'active':''}
                                        ${item.text && this.props.value == item.text ? 'active':''}
                                        ${this.props.value == item ? 'active' : ''}`}
                                key={item.text ? item.text : item}
                                onClick={() => this.props.selectItemHandler(item.value ? item.value : item)}>
                                {item.text ? item.text : item}
                            </li>
                        )} */}
                    </ul>     
            </div>
        )
    }
}


export default injectIntl(DropDownList) ;