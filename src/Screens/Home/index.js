import { Image, View, Text, FlatList, ScrollView, Alert, Animated, Easing, StatusBar } from 'react-native';
import React, { useState, Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from "@react-native-community/blur";
import {
  MainContainer,
  NavBar,
  Header,
  Stories,
  StoriesBorder,
  StorieContainer,
  StorieContent,
  StoriesUName,
  StoriesUPic,
  Feed,
  FeedContent,
  FeedBottomBar,
  LikeContent,
  Like,
  LikeOverlay,
  CommentContent,
  SaveContent,
  FeedShadow,
  FeedHeader,
  LikedAnimation
} from './styles';
import Add from '../../icons/add.png';
import HomeI from '../../icons/home.png';
import Heart from '../../icons/heart.png';
import Heart2 from '../../icons/heart2.png';
import User from '../../icons/user.png';
import Search from '../../icons/search.png';
import Settings from '../../icons/settings.png';
import Email from '../../icons/email.png';
import IgLogo from '../../icons/igLogo.png';
import SADD from '../../icons/storieAdd.png';
import Comment from '../../icons/comment.png';
import Send from '../../icons/send.png';
import Save from '../../icons/save.png';
import User1 from '../../imgs/user1.jpg';
import User2 from '../../imgs/user2.jpg';
import User3 from '../../imgs/user3.jpg';
import User4 from '../../imgs/user4.jpg';
import User5 from '../../imgs/user5.jpg';
import Post1 from '../../imgs/post1.jpg';
import Post2 from '../../imgs/post2.jpg';
import Post3 from '../../imgs/post3.jpg';
import Post4 from '../../imgs/post4.jpg';
import Post5 from '../../imgs/post5.jpg';
import PostUser1 from '../../imgs/postUser1.jpg';
import PostUser2 from '../../imgs/postUser2.jpg';
import PostUser3 from '../../imgs/postUser3.jpg';
import PostUser4 from '../../imgs/postUser4.jpg';
import PostUser5 from '../../imgs/postUser5.jpg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Heart3 from '../../icons/heart3.png';


export default function Home() {
  const [t, setT] = useState(1)



  const StoriesData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      userPic: SADD,
      userName: 'Meus Stories'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      userPic: User1,
      userName: 'Gabriella'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      userPic: User2,
      userName: 'Braga'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d723',
      userPic: User3,
      userName: 'Paula'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7d2',
      userPic: User4,
      userName: 'João'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7fd2',
      userPic: User5,
      userName: 'Thais'
    },
  ];

  const FeedData = [
    {
      id: 'bd7acbea-c441b1-46c2-aed5-3ad53abb28ba',
      userName: 'Amanda317',
      pic: Post1,
      userPic: PostUser1,
      likes: 232,
      comments: 132
    },
    {
      id: 'bd7acbea-c1b1-46c2-aeasd5-3ad53abb28ba',
      userName: 'Rafa_CF',
      userPic: PostUser2,
      pic: Post5,
      likes: 232,
      comments: 132
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed235-3ad53abb28ba',
      userName: 'Evellyn_13',
      userPic: PostUser3,
      pic: Post3,
      likes: 232,
      comments: 132
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53addsbb28ba',
      userName: 'Caio.A',
      userPic: PostUser4,
      pic: Post2,
      likes: 232,
      comments: 132
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad5433addsbb28ba',
      userName: 'Jhonny_Braga2',
      userPic: PostUser5,
      pic: Post4,
      likes: 232,
      comments: 132
    },
  ]

  const StoriesItem = ({ uPic, uName, index }) => (
    <StorieContent>
      <StoriesBorder>
        {index === 0 ?
                <LinearGradient
                // Background Linear Gradient
                colors={['#E1E6E9', '#E1E6E9']}
                style={{flex: 1, borderRadius: 43, justifyContent: 'center', alignItems: 'center'}}>
                  <StorieContainer>
                    <StoriesUPic source={uPic} />
                  </StorieContainer>
                </LinearGradient>:
                <LinearGradient
                  // Background Linear Gradient
                  colors={['#C421BC', '#FEA02A']}
                  style={{flex: 1, borderRadius: 43, justifyContent: 'center', alignItems: 'center'}}>
                    <StorieContainer>
                      <StoriesUPic source={uPic} />
                    </StorieContainer>
                </LinearGradient>
        }
      </StoriesBorder>
      <StoriesUName>{uName}</StoriesUName>
    </StorieContent>
  );


  const renderStoriesItem = ({ item, index }) => (
    <StoriesItem index={index} uPic={item.userPic} uName={item.userName} />
  );

    return (
      <MainContainer>
        <StatusBar backgroundColor="#FFFFFF" />
        <Feed
          ListHeaderComponent={<Stories
            data={StoriesData}
            renderItem={renderStoriesItem}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={{flexGrow: 1, alignItems: 'center', backgroundColor: 'white'}}
            showsHorizontalScrollIndicator={false}
            >
            </Stories>}
          showsVerticalScrollIndicator={false}
          data={FeedData}
          renderItem={({item, index}) => {
            return <FeedRenderItem {...item} />
          }}
          keyExtractor={item => item.id}
        >
        </Feed>

        <Header>
          <Image style={{width: 30, height: 30}} source={Settings} />
          <Image style={{width: 130, height: 36, resizeMode: 'contain', marginTop: 10}} source={IgLogo} />
          <Image style={{width: 32, height: 32}} source={Email} />
        </Header>
        <NavBar>
          <Image style={{width: 28, height: 28}} source={HomeI} />
          <Image style={{width: 28, height: 28}} source={Search} />
          <Image style={{width: 28, height: 28}} source={Add} />
          <Image style={{width: 36, height: 36}} source={Heart} />
          <Image style={{width: 28, height: 28}} source={User} />
        </NavBar>

      </MainContainer>
    );
  }

  class FeedRenderItem extends React.Component {
    constructor() {
      super();
      this.state = {
        colorAnimation: new Animated.Value(0),
        toggle: 1,
        likedAnimation: new Animated.Value(0)
      };
      this.LikeColorInterpolation = this.state.colorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange:["rgba(255, 255, 255, 0.2)" , "rgba(255, 0, 70, 1)"]
      });

      this.LikedAnimationInterpolation = this.state.likedAnimation.interpolate({
        inputRange: [0, 1],
        outputRange:[0 , 1]
      });

      this.LikedAnimatedStyle = { 
        transform: [
          {
            scale: this.LikedAnimationInterpolation
          }
        ]
      }

      this.LikeAnimatedStyle = { 
        backgroundColor: this.LikeColorInterpolation
      }

      this.LikedAnimation = () => {
        if (this.state.toggle) {
          this.LikeAnimation();
          Animated.timing(this.state.likedAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.in(Easing.elastic(2)),
          }).start(() => {
            Animated.timing(this.state.likedAnimation, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
              easing: Easing.out(Easing.elastic(1)),
            }).start();
          })
        }
       }

      this.LikeAnimation = () => {
        Animated.timing(this.state.colorAnimation, {
          toValue: this.state.toggle,
          duration: 300,
          useNativeDriver: false
        }).start(this.setState({toggle: this.state.toggle ? 0: 1}))
       }
    }

    lastTap = null;
    handleDoubleTap = () => {
      const now = Date.now();
      const DOUBLE_PRESS_DELAY = 300;
      if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
        this.LikedAnimation();
      } else {
        this.lastTap = now;
      }
    }

    render(){
      return(
        <TouchableWithoutFeedback style={{marginBottom: -72}} onPress={this.handleDoubleTap}>
          <FeedContent  source={this.props.pic} imageStyle={{borderRadius: 40}}>
          <FeedShadow colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}></FeedShadow>
          <Animated.Image style={{marginTop: -80, ...this.LikedAnimatedStyle}} source={Heart3}/>
        <FeedBottomBar>
          <LikeContent >
            <Like blurType='light' blurAmount={100} blurRadius={20} overlayColor={'rgba(255, 255, 255, 0.0)'}>
            <TouchableWithoutFeedback onPress={() => this.LikeAnimation()}>
              <Animated.View style={{    width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', ...this.LikeAnimatedStyle}}>
                <Image style={{width: 20, height: 20, marginRight: 10}} source={Heart2} />
                <Text style={{color: 'white', marginBottom: 2}}>35,8K</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
            </Like>
          </LikeContent>
          <CommentContent>
            <Image style={{width: 22, height: 22}} source={Comment} />
            <Text style={{color: '#FFFFFF', marginLeft: 5, textAlign: 'center'}}>192</Text>
          </CommentContent>
          <CommentContent>
            <Image style={{width: 20, height: 20, marginTop: -2}} source={Send} />
          </CommentContent>
          <SaveContent>
            <Image style={{width: 20, height: 20}} source={Save} />
          </SaveContent>
        </FeedBottomBar>
        <FeedHeader>
          <Image style={{width: 50, height: 50, borderRadius: 100}} source={this.props.userPic} />
          <Text style={{color: '#FFFF', marginTop: -3, fontSize: 16, fontWeight: 'bold', marginLeft: 15,textShadowOffset: { width: 1, height: 1 }, textShadowColor: 'black', textShadowRadius: 1}}>{this.props.userName}</Text>
        </FeedHeader>
        </FeedContent>
      </TouchableWithoutFeedback>
      )
    }
  }