import React from 'react';
import './index.less';
class Buttons extends React.Component {
  btnClick = (e) => {
    let id = e.target.getAttribute('data-id');
    const { data } = this.props;
    const change = data.change;
    if( change ) change(id);
  }
  render() {
    const { data } = this.props;
    const { active } = data;
    const btns = data.btns;
    return (
      <div className="n-button x">
        {
          btns.length > 0 && <React.Fragment>
            {
              btns.map((item, index) => {
                return <div className={item.id == active ? 'item active' : 'item'} key={index} data-id={item.id} onClick={this.btnClick}>
                  <img src={require(`../../common/images/menu/${item.icon}`)} data-id={item.id}/>
                  <span className="text" data-id={item.id}>{item.text}</span>
                </div>
              })
            }
          </React.Fragment>
        }
      </div>
    );
  }
}
export default Buttons;