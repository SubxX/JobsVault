import { Stack } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import JobCard from "../components/home/JobCard";
import { COLORS, SIZES, icons } from "../constants";
import IconButton from "../components/IconButton";
import Container from "../components/Container";
import SearchBar from "../components/home/SearchBar";
import FlexBox from "../components/FlexBox";
import JobCardMinimal from "../components/home/JobCardMinimal";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "JobsVault",
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerRight: () => <IconButton icon={icons.menu} />,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container style={{ marginTop: SIZES.xSmall }}>
          <SearchBar />

          <FlexBox
            style={{ justifyContent: "space-between", marginTop: SIZES.xLarge }}
          >
            <Text style={{ fontSize: SIZES.medium, fontWeight: "600" }}>
              Featured Jobs
            </Text>
            <Text style={{ color: COLORS.gray2 }}>View All</Text>
          </FlexBox>
        </Container>

        <FlatList
          horizontal
          keyExtractor={(item) => item.toString()}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={(item) => <JobCard />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            columnGap: SIZES.large,
            padding: SIZES.large,
          }}
        />

        <Container>
          <FlexBox
            style={{
              justifyContent: "space-between",
              marginBottom: SIZES.large,
            }}
          >
            <Text style={{ fontSize: SIZES.medium, fontWeight: "600" }}>
              Recommended Jobs For You
            </Text>
            <Text style={{ color: COLORS.gray2 }}>View All</Text>
          </FlexBox>

          <JobCardMinimal style={{ marginBottom: SIZES.small }} />
          <JobCardMinimal style={{ marginBottom: SIZES.small }} />
          <JobCardMinimal style={{ marginBottom: SIZES.small }} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
