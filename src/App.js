/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component, Fragment } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';
import Header from './components/Header';
import Hero from './components/Hero';
import AudioPic from './components/AudioPic';
import Summary from './components/Summary';
import TextBlocks from './components/TextBlocks';
import ImageSetVBlocks from './components/ImageSetBlocks';
import { userService } from './services/user.service';

class App extends Component {
  state = {
    authors: [],
    title: '',
    summary: '',
    textBlockContents: [],
    imageBlockContents: [],
    isLoading: true,
    err: false
  };

  componentDidMount() {
    userService
      .getData()
      .then(res => {
        const { authors, blocks, title, summary } = res.data.article;
        console.log(blocks);
        const textBlockContents = blocks
          .filter(block => block.blockTypeId === 0)
          .map(block => block.content);
        const imageBlockContents = blocks
          .filter(block => block.blockTypeId === 1)
          .map(block => block.content);
        this.setState({
          authors: authors,
          title: title,
          summary: summary,
          textBlockContents: textBlockContents,
          imageBlockContents: imageBlockContents,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false, err: true });
      });
  }

  render() {
    let page = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (this.state.isLoading) {
      page = (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }
    if (!this.state.isLoading && !this.state.err) {
      page = (
        <div>
          <Header />
          <Hero authors={this.state.authors} title={this.state.title} />
          <AudioPic />
          <Summary>{this.state.summary}</Summary>
          <TextBlocks textBlockContents={this.state.textBlockContents} />
          <ImageSetVBlocks imageBlockContents={this.state.imageBlockContents} />
        </div>
      );
    }
    return <Fragment>{page}</Fragment>;
  }
}

export default App;
