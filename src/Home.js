import React, { Component } from 'react';
import '../style/App.css';
import App from 'grommet/components/App'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Grommet from 'grommet/components/Grommet'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Button from 'grommet/components/Button'
import DocumentUploadIcon from 'grommet/components/icons/base/DocumentUpload'
import 'grommet/grommet-aruba.min.css'

class Home extends Component {
  render() {
    return <App centered inline>
      <Article>
        <Header>
          <Grommet a11yTitle='Grommet Logo'>
            <svg className='grommetux-logo-icon' viewBox='0 0 182 182' width='182'
              height='182' role='img' aria-label='Grommet Logo'>
                <path role='presentation' strokeWidth='18' stroke='#bf5a00'
                fill='none' d='M 91,91 m 0,-82 a 82,82 0 1,1 0,164 a 82,82 0 1,1 0,-164'></path>
              </svg>
          </Grommet>
          <Menu direction='row' closeOnClick pad='none'>
             <Box pad='none' direction='row' tag='nav'
              className='grommetux-menu grommetux-menu--row grommetux-menu--inline'
              focusable>
              <nav className='grommetux-box grommetux-box--direction-row
               grommetux-box--pad-none grommetux-menu--row grommetux-menu--inline'>
                <Anchor key='home' align='center' path='#' animateIcon
                  method='push' tag='a'>
                    <a href='#' className='grommetux-anchor grommetux-anchor--align-center'>
                      Home
                    </a>
                </Anchor>

                <Anchor key='about' align='center' path='#' animateIcon
                  method='push' tag='a'>
                    <a href='#' className='grommetux-anchor grommetux-anchor--align-center'>
                      About
                    </a>
                </Anchor>  

                <Anchor key='dashboard' align='center' path='#' animateIcon
                  method='push' tag='a'>
                    <a href='#' className='grommetux-anchor grommetux-anchor--align-center'>
                      Dashboard
                    </a>
                </Anchor> 

              </nav>          
            </Box>
          </Menu>
         
        </Header>

        <Section pad='large'
          justify='center'
          align='center'>
          <Headline margin='medium'>
            Body
          </Headline>
        </Section>

        <Section pad='large'
          justify='center'
          align='center'>
          <Headline margin='medium'>
            Footer
          </Headline>
        </Section>
      </Article>

      <Columns size = 'medium'
        justify ='center'>
        <Card>
          <h2 class="grommet-heading grommetux-heading--strong">
            Origin of Algebra
          </h2>
          <p class="grommet-paragraph grommetux-paragraph-- large grommetux-paragraph--margin-medium">
          Where did the word "Algebra" and its underlying ideas come from? Created by Sal Khan
          </p>
          <a href='https://www.purdue.edu/' class="grommetux-anchor">
          This is the video link
          </a>
          <Button icon={<DocumentUploadIcon />}
          label='UPLOAD'
          href='#'>
        </Button>
        </Card>
        <Card>
          <h2 class="grommet-heading grommetux-heading--strong">
            Origin of Algebra
          </h2>
          <p class="grommet-paragraph grommetux-paragraph-- large grommetux-paragraph--margin-medium">
          Where did the word "Algebra" and its underlying ideas come from? Created by Sal Khan
          </p>
          <a href='https://www.purdue.edu/' class="grommetux-anchor">
          This is the video link
          </a>
          <Button icon={<DocumentUploadIcon />}
          label='UPLOAD'
          href='#'>
        </Button>
        </Card>
        <Card>
          <h2 class="grommet-heading grommetux-heading--strong">
            Origin of Algebra
          </h2>
          <p class="grommet-paragraph grommetux-paragraph-- large grommetux-paragraph--margin-medium">
          Where did the word "Algebra" and its underlying ideas come from? Created by Sal Khan
          </p>
          <a href='https://www.purdue.edu/' class="grommetux-anchor">
            This the the video link
          </a>
          <Button icon={<DocumentUploadIcon />}
          label='UPLOAD'
          href='#'>
        </Button>
        </Card>
        <Card>
          <h2 class="grommet-heading grommetux-heading--strong">
            Origin of Algebra
          </h2>
          <p class="grommet-paragraph grommetux-paragraph-- large grommetux-paragraph--margin-medium">
          Where did the word "Algebra" and its underlying ideas come from? Created by Sal Khan
          </p>
          <a href='https://www.purdue.edu/' class="grommetux-anchor">
            This the the video link
          </a>
          <Button icon={<DocumentUploadIcon />}
          label='UPLOAD'
          href='#'>
        </Button>
        </Card>
        <Card>
          <h2 class="grommet-heading grommetux-heading--strong">
            Origin of Algebra
          </h2>
          <p class="grommet-paragraph grommetux-paragraph-- large grommetux-paragraph--margin-medium">
          Where did the word "Algebra" and its underlying ideas come from? Created by Sal Khan
          </p>
          <a href='https://www.purdue.edu/' class="grommetux-anchor">
            This the the video link
          </a>
          <Button icon={<DocumentUploadIcon />}
          label='UPLOAD'
          href='#'>
        </Button>
        </Card>
      </Columns>
    </App>
    ;
  }
}

export default Home;