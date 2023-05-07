import React from "react";
import { RiSunFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { HiLink, HiHome } from "react-icons/hi";
import { BsGeoAltFill, BsTwitter } from "react-icons/bs";
import {
  Container,
  Header,
  NameApp,
  ModeApp,
  Mode,
  SearchContainer,
  ButtonSearch,
  MainContainer,
  AvatarUserGitHub,
  Content,
  MainHeader,
  UserNameGitHub,
  UpdatedAt,
  LinkUser,
  Subtitle,
  StatsContainer,
  Repo,
  Followers,
  Following,
  StatsName,
  Number,
  StatsFooter,
  City,
  Link,
  Social,
  HomeLink,
  CityName,
  SocialName,
  BlockOne,
  BlockTwo,
  LinkName,
  HomeName,
  UserList,
} from "./styled";

class GitHub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "images/github.png",
      name: "The Octocat",
      updated: "2021-09-22",
      repo: "8",
      followers: "4085",
      following: "9",
      location: "San Francisco",
      twitUsername: "Not Available",
      blog: "https://github.blog/",
      company: "@github",
    };
  }

  gitHubUser = async () => {
    const nickname = this.state.name;
    const api_url_user = await fetch(
      `https://api.github.com/users/${nickname}`
    );
    const response = await api_url_user.json();
    this.setState({
      avatar: response.avatar_url,
      name: response.name,
      repo: response.public_repos,
      updated: response.updated_at,
    });
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  };

  render() {
    const {
      avatar,
      name,
      updated,
      repo,
      followers,
      following,
      location,
      twitUsername,
      blog,
      company,
    } = this.state;
    return (
      <Container>
        <Header>
          <NameApp>devfinder</NameApp>
          <ModeApp>
            <Mode>Light</Mode>
            <RiSunFill />
          </ModeApp>
        </Header>
        <SearchContainer>
          <input
            placeholder={`Search GitHub username...`}
            value={name}
            onChange={this.onChange}
          />
          <FiSearch />
          <ButtonSearch onClick={this.gitHubUser}>Search</ButtonSearch>
        </SearchContainer>
        <MainContainer>
          <AvatarUserGitHub>
            <img src={avatar} />
          </AvatarUserGitHub>
          <Content>
            <MainHeader>
              <UserNameGitHub>{name}</UserNameGitHub>
              <UpdatedAt>{updated}</UpdatedAt>
            </MainHeader>
            <LinkUser>
              <a href="{html_url}" target="_blank">
                @{name}
              </a>
            </LinkUser>
            <Subtitle>This profile has no bio</Subtitle>
            <StatsContainer>
              <Repo>
                <StatsName>Repos</StatsName>
                <Number>{repo}</Number>
              </Repo>
              <Followers>
                <StatsName>Followers</StatsName>
                <Number>{followers}</Number>
              </Followers>
              <Following>
                <StatsName>Following</StatsName>
                <Number>{following}</Number>
              </Following>
            </StatsContainer>
            <StatsFooter>
              <BlockOne>
                <City>
                  <BsGeoAltFill />
                  <CityName>{location}</CityName>
                </City>
                <Social>
                  <BsTwitter />
                  <SocialName>{twitUsername}</SocialName>
                </Social>
              </BlockOne>
              <BlockTwo>
                <Link>
                  <HiLink />
                  <LinkName>
                    <a href="{blog}" target="_blank">
                      {blog}
                    </a>
                  </LinkName>
                </Link>
                <HomeLink>
                  <HiHome />
                  <HomeName>
                    <a>{company}</a>
                  </HomeName>
                </HomeLink>
              </BlockTwo>
            </StatsFooter>
          </Content>
        </MainContainer>
      </Container>
    );
  }
}

export default GitHub;
