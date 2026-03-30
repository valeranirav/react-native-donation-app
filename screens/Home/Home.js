import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { updateSelectedCategoryId } from '../../redux/reducres/Categories';
import { updateSelectedDonationId } from '../../redux/reducres/Donations';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { Routes } from '../../navigation/Routes';

const Home = ({ navigation }) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const dispatch = useDispatch();

  let categoryPageSize = 4;
  const [isLoadingCategoreis, setIsLoadingCategoreis] = useState(false);
  const [currentCategoryPage, setCurrentCategoryPage] = useState(1);
  const [renderedCategories, setRenderedCategories] = useState([]);

  const [donationItens, setDonationItens] = useState([]);

  useEffect(() => {
    setIsLoadingCategoreis(true);
    setRenderedCategories(
      pagination(categories.categories, currentCategoryPage, categoryPageSize),
    );
    setIsLoadingCategoreis(false);
    setCurrentCategoryPage(prev => prev + 1);
  }, []);

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItens(items);
  }, [categories.selectedCategoryId]);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.userName}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategoreis) {
                return;
              }

              let newData = pagination(
                categories.categories,
                currentCategoryPage,
                categoryPageSize,
              );

              if (newData.length > 0) {
                setRenderedCategories(prevState => [...prevState, ...newData]);
                setCurrentCategoryPage(prevState => prevState + 1);
              }
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={renderedCategories}
            renderItem={({ item }) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                ></Tab>
              </View>
            )}
          />
        </View>

        {donationItens.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItens.map(item => {
              const categoryInformation = categories.categories.find(
                category =>
                  category.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={item.donationItemId}
                  style={style.donationItemContainer}
                >
                  <SingleDonationItem
                    donationItemId={item.donationItemId}
                    donationTitle={item.name}
                    price={parseFloat(item.price)}
                    badgeTitle={categoryInformation.name}
                    uri={item.image}
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.DonationItemDetails, {
                        categoryInformation
                      });
                    }}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
