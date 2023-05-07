import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  width: 600px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const NameApp = styled.div`
  display: flex;
  color: #f4f7f8;
`;
export const ModeApp = styled.div`
  display: flex;
  align-items: center;
  color: #f4f7f8;
  cursor: pointer;
`;
export const Mode = styled.div`
  display: flex;
  margin-right: 10px;
  text-transform: uppercase;
`;
export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 25px;
  input {
    box-sizing: border-box;
    width: 600px;
    height: 50px;
    border: none;
    outline: none;
    background-color: #1f2a48;
    border-radius: 8px;
    padding: 0px 100px 0px 40px;
    color: #fff;
  }
  svg {
    position: absolute;
    padding: 0 0 0 10px;
    color: #2d5c9c;
  }
`;
export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 65px;
  height: 35px;
  right: 0;
  border-radius: 8px;
  border: none;
  outline: none;
  margin-right: 15px;
  background-color: #0079fa;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
`;
export const MainContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 600px;
  height: 300px;
  background-color: #1f2a48;
  border-radius: 8px;
`;
export const AvatarUserGitHub = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 180px;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: 30px 0px 0px 30px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px;
`;
export const MainHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  //padding: 0px 20px 0px 20px;
  margin-bottom: 10px;
`;
export const UserNameGitHub = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  color: #e9eef5;
`;
export const UpdatedAt = styled.div`
  display: flex;
  font-size: 12px;
  color: #9da5bc;
`;
export const LinkUser = styled.div`
  display: flex;
  margin-bottom: 10px;
  a {
    color: #124180;
  }
`;
export const Subtitle = styled.div`
  display: flex;
  font-size: 12px;
  color: #747e98;
  margin-bottom: 20px;
`;
export const StatsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  border-radius: 8px;
  background-color: #141c2f;
  margin-bottom: 15px;
  padding: 10px;
`;
export const Repo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const Following = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const StatsName = styled.div`
  display: flex;
  color: #737a87;
  font-size: 12px;
  margin-bottom: 5px;
`;
export const Number = styled.div`
  display: flex;
  color: #cfd5de;
  font-weight: 700;
`;
export const StatsFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #8a93a8;
  svg {
    margin-right: 10px;
  }
`;
export const City = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const Link = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const HomeLink = styled.div`
  display: flex;
  align-items: center;
`;
export const Social = styled.div`
  display: flex;
  align-items: center;
`;
export const SocialName = styled.div`
  display: flex;
`;
export const CityName = styled.div`
  display: flex;
  align-items: center;
`;
export const BlockOne = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BlockTwo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LinkName = styled.div`
  display: flex;
`;
export const HomeName = styled.div`
  display: flex;
  a {
    color: #124180;
  }
`;
export const UserList = styled.div`
  display: flex;
`;