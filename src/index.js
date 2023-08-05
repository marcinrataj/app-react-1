class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
  }

  showMoreContent() {
    this.setState({ showContent: true });
  }

  render() {
    return (
      <div>
        <h2>{this.props.title} </h2>
        {this.state.showContent ? (
          <p>{this.props.content}</p>
        ) : (
          <div>
            <p>{this.props.shortContent}</p>
            <button onClick={() => this.showMoreContent()}>
              Czytaj więcej
            </button>
          </div>
        )}
        <hr />
      </div>
    );
  }
}

const Blog = function () {
  const posts = [
    {
      title: "Przepis na naleśniki",
      shortContent: "Na naturalnym mleku...",
      content: "mleko, jajka zmieszać...",
      showContent: true,
      id: 2,
    },
    {
      title: "Przepis na kurczaka",
      shortContent: "Na ostro...",
      content: "pokroić kurczaka, usmażyć....",
      showContent: true,
      id: 3,
    },
  ];

  const postsList = posts.map((el) => (
    <Post
      key={el.id}
      title={el.title}
      content={el.content}
      showContent={el.showContent}
      shortContent={el.shortContent}
    />
  ));
  return (
    <div>
      <p>To jest blog o gotowaniu</p>
      {postsList}
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
  );
root.render(<Blog />);