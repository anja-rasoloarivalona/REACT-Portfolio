import React, { Component } from 'react'
import './DropDownList.css';
import IconSvg from '../../utilities/svg/svg'
import { injectIntl, FormattedMessage  } from 'react-intl'

class DropDownList extends Component {

    state = {
        showList: false
    }

    toggleList = () => {
        this.setState(prevState => ({
            ...prevState,
            showList: !prevState.showList
        }))
    }

    render() {
        const {showList} = this.state;
        return (
            <div className={`drop-down-list ${showList ? 'show' : ''}`}
                 onClick={this.toggleList}>
                    <div className="drop-down-list__value">
                        <FormattedMessage id={this.props.value} defaultMessage={this.props.value}/>

                        <IconSvg icon="arrow-down"/>
                    </div>
                    <ul className={`drop-down-list__list`}>
                    <li className={`drop-down-list__list__item ${this.props.value === 'english' ? 'active':''}`}
                        onClick={() => this.props.selectItemHandler('english')}>
                        <FormattedMessage id="English" defaultMessage="english"/>
                    </li>
                    <li className={`drop-down-list__list__item ${this.props.value === 'french' ? 'active':''}`}
                        onClick={() => this.props.selectItemHandler('french')}>
                        <FormattedMessage id="French" defaultMessage="french"/>
                    </li>
                    </ul>     
            </div>
        )
    }
}


export default injectIntl(DropDownList) ;