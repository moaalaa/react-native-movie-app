import { Tabs } from "expo-router";
import React from "react";
import {
  BookmarkIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/solid";

import {
  BookmarkIcon as BookmarkIconOutline,
  HomeIcon as HomeIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  UserIcon as UserIconOutline,
} from "react-native-heroicons/outline";

// Reusable dynamic icon
const TabIcon = ({ focused, SolidIcon, OutlineIcon }) => {
  return focused ? <SolidIcon color="#ab8bff" /> : <OutlineIcon color="gray" />;
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ab8bff",
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 40,
          height: 55,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              SolidIcon={HomeIcon}
              OutlineIcon={HomeIconOutline}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              SolidIcon={MagnifyingGlassIcon}
              OutlineIcon={MagnifyingGlassIconOutline}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              SolidIcon={BookmarkIcon}
              OutlineIcon={BookmarkIconOutline}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              SolidIcon={UserIcon}
              OutlineIcon={UserIconOutline}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
