var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

    _this.state = {
      showContent: false
    };
    return _this;
  }

  _createClass(Post, [{
    key: "showMoreContent",
    value: function showMoreContent() {
      this.setState({ showContent: true });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          this.props.title,
          " "
        ),
        this.state.showContent ? React.createElement(
          "p",
          null,
          this.props.content
        ) : React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            this.props.shortContent
          ),
          React.createElement(
            "button",
            { onClick: function onClick() {
                return _this2.showMoreContent();
              } },
            "Czytaj wi\u0119cej"
          )
        ),
        React.createElement("hr", null)
      );
    }
  }]);

  return Post;
}(React.Component);

var Blog = function Blog() {
  var posts = [{
    title: "Przepis na naleśniki",
    shortContent: "Na naturalnym mleku...",
    content: "mleko, jajka zmieszać...",
    showContent: true,
    id: 2
  }, {
    title: "Przepis na kurczaka",
    shortContent: "Na ostro...",
    content: "pokroić kurczaka, usmażyć....",
    showContent: true,
    id: 3
  }];

  var postsList = posts.map(function (el) {
    return React.createElement(Post, {
      key: el.id,
      title: el.title,
      content: el.content,
      showContent: el.showContent,
      shortContent: el.shortContent
    });
  });
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "To jest blog o gotowaniu"
    ),
    postsList
  );
};

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Blog, null));