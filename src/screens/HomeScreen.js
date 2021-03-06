var React = require('react'),
  Tiles = require('../react-tiles/src/react-tiles')
;

var Link = Tiles.Link;

var Home = React.createClass({
  getInitialState: function(){
    console.log( this.props.layout );
    
    return {
      showTooMany: false
    };
  },

  render: function(){
    return (
      <div className="homeScreen">
        <h2>Welcome to multi-route React</h2>
        <div>
          <p>If you are developing a react app and you need to display more than one route at the same time <span className="rt">react-tiles</span> is here to help.</p>
          <button onClick={ () => this.showSidebar() }>Show me <span className="rt">react-tiles</span> working now!</button>
          { this.renderTooMany() }
          <p><span className="rt">react tiles</span> divides your app's layout in tiles loading one route in each of them, the way you can use all the app's screens you need at the same time in one browser window. <strong>Try to click the button above again!</strong></p>
          <p>But not everything is about columns and rows. Your may prefer to freed your tiles:</p>
          <Link to="/floatingTile" className="btn" wrapper="floating">Open a float tile</Link>
          <p>Isn't it nice? You can create all the tiles you want and drag them to the bottom and the left of the screen to create crazy layouts.</p>
          <p>You can also use your browser's back and forward button to go through your layout history. That is because <span className="rt">react tiles</span> uses a URL approach to define the layouts, that way opening tiles is as simple as clicking a link and you can share your layouts URLs.</p>
        </div>
        <div>
          <h3>I want to know more</h3>
          <p>Do you think <span className="rt">react tiles</span> fits your needs?</p>
          <ul>
            <li><Link to="/getStarted" single>Get started using <span className="rt">react tiles</span></Link>.</li>
          </ul>
        </div>
        <div>
          <h3>I want to collaborate</h3>
          <p>That is really nice! This is a really young project in an alpha stage that for sure can use good developers help.</p>
          <ul>
            <li><a href="https://github.com/arqex/react-tiles">Fork <span className="rt">react tiles</span> on github</a>.</li>
            <li>Be sure that you understand how it works <Link to="/getStarted" single>reading the getting started guide</Link>.</li>
            <li><a href="https://github.com/arqex/react-tiles">This site is also available on github</a>. It is the perfect way of learning and try your own modifications to the source.</li>
          </ul>
        </div>
      </div>
    );
  },
  renderTooMany: function(){
    if( !this.state.showTooMany ) return;

    return (
      <div className="warn">
        <p>Hey!! Seems like you want to open a bunch of tiles in the same wrapper!</p>
        <p><span className="rt">react-tiles</span> allows to detect the tiles on a wrapper at anytime. So this site is coded to not to allow more than 3 tiles per wrapper.</p>
      </div>
    )
  },

  showSidebar: function(){
    var builder = Tiles.getQueryBuilder(),
      sidebarInfo = Tiles.getWrapperInfo('sidebar')
    ;

    if( sidebarInfo && sidebarInfo.children.length > 2 ){
      return this.setState({showTooMany: true});
    }

    var url = builder.setTile({
      wrapper: 'sidebar',
      route: '/sidebar'
    });

    console.log( url );
    this.props.history.push( url );
  }
});

module.exports = Home;
