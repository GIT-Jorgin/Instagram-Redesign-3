import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const MainContainer = styled.View`
    flex: 1;
    align-items: center;
    background: white;
`;

export const NavBar = styled.View`
    position: absolute;
    height: 80px;
    display: flex;
    width: 100%;
    margin-bottom: auto;
    bottom: 0;
    background: white;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    flex-direction: row;
    z-index: 1;
    justify-content: space-around;
    align-items: center;
`;

export const Header = styled.View`
    position: absolute;
    height: 60px;
    display: flex;
    width: 100%;
    padding: 0 7% 0 7%;
    margin-top: auto;
    top: 0;
    background: white;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &::after {
	top: 20px;
	border-radius: 0 0 10px 0;
	-moz-border-radius: 0 0 10px 0;
	-webkit-border-radius: 0 0 10px 0;
	-webkit-box-shadow: 10px 0 0 0 #3C3F51;
	box-shadow: 10px 0 0 0 #3C3F51;
}
`;

export const Stories = styled.FlatList`
    display: flex;
    max-height: 125px;
    margin-top: 60px;
    margin-bottom: 50px;
`;

export const StorieContent = styled.View`
    width: 100px;
    height: 110px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StoriesBorder = styled.View`
    width: 96px;
    height: 96px;
    border-radius: 43px;
`;

export const StorieContainer = styled.View`
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    background: white;
    border-radius: 40px;
`;

export const StoriesUName = styled.Text`
    font-size: 16px;
    margin-top: 2px;
`;

export const StoriesUPic = styled.Image`
    width: 90%;
    height: 90%;
    border-radius: 35px;
`;

export const Feed = styled.FlatList`
    flex: 1;
    width: 100%;
    margin-top: 30px;
`;

export const FeedContent = styled.ImageBackground`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 495px;
    background: red;
    border-radius: 40px;
`;

export const FeedShadow = styled(LinearGradient)`
    width: 100%;
    height: 130px;
    position: absolute;
    bottom: 20px;
`;

export const FeedBottomBar = styled.View`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 92%;
    height: 45px;
    margin-bottom: auto;
    bottom: 85px;
    align-items: center;
`;

export const LikeContent = styled.View`
    flex: 1;
    overflow: hidden;
    max-width: 100px;
    height: 100%;
    border-radius: 22px;
`;

export const CommentContent = styled.View`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`;

export const SaveContent = styled.View`
    flex: 1;
    justify-content: flex-end;
    flex-direction: row;
`;

export const Like = styled(BlurView)`
    width: 100%;
    height: 100%;
`;

export const LikeOverlay = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: rgba(255, 255, 255, 0.2);
`;

export const FeedHeader = styled.View`
    width: 92%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 20px;
`;
export const LikedAnimation = styled.Image`

`;
