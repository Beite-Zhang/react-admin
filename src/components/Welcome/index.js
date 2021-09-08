import React from 'react';
import './index.less';

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

  render() {
    return (
      <div>
        <h1 className="welcome-text">
          Welcome, 这里是欢迎界面!
          <br />
          项目地址: <a target="_blank" href="http://git.oschina.net/winer632/react-antd-admin">http://git.oschina.net/winer632/react-antd-admin</a>
        </h1>
      </div>
    );
  }

}

export default Welcome;
