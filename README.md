# [Meta Achievements XML Test Viewer](https://xml.meta-achievements.org/)

[![Site Status](https://img.shields.io/website?url=https%3A%2F%2Fxml.meta-achievements.org)](https://xml.meta-achievements.org)
![HTML5](https://img.shields.io/badge/Frontend-HTML5%2FCSS3%2FJS-orange.svg)
![Visibility](https://img.shields.io/badge/Repo-Public-green.svg)
[![Meta Achievements Ecosystem](https://img.shields.io/badge/Ecosystem-Meta%20Achievements-purple.svg)](https://meta-achievements.org)

A modern, responsive web application for inspecting, testing, and visualizing Meta VR achievement account data exported as XML or served via the public User XML API.

---

## 🌐 Meta Achievements Ecosystem

This repository is part of the **[Meta Achievements Organization](https://github.com/MetaAchievements)**:

### Public Repositories
- 🌐 **Main Project Hub**: [MetaAchievementsTracker](https://github.com/MetaAchievements/MetaAchievementsTracker)
- 📄 **XML Test Viewer**: [MetaAchievementsXMLTest](https://github.com/MetaAchievements/MetaAchievementsXMLTest) *(This Repo)* ([xml.meta-achievements.org](https://xml.meta-achievements.org))

### Private Repositories
- 💻 **Web Portal & Server**: [MetaAchievementsHTML](https://github.com/MetaAchievements/MetaAchievementsHTML) ([meta-achievements.org](https://meta-achievements.org))
- 📱 **Android App**: [MetaAchievementsTrackerAndroid](https://github.com/MetaAchievements/MetaAchievementsTrackerAndroid)
- 📱 **iOS App**: [MetaAchievementsTrackerIOS](https://github.com/MetaAchievements/MetaAchievementsTrackerIOS)
- ⚙️ **Definitions Scraper**: [Achievement-Definitions-Grabber](https://github.com/MetaAchievements/Achievement-Definitions-Grabber)
- 📖 **Deployment & Architecture Documentation**: See [DEPLOYMENT.md](https://github.com/MetaAchievements/MetaAchievementsHTML/blob/main/DEPLOYMENT.md) for full ecosystem details.

---

## 🌟 Overview & Purpose

The **Meta Achievements XML Test Viewer** allows users and developers to test, inspect, and browse complete Meta VR achievement profile data. It supports both offline file inspection (via locally exported XML files) and live profile lookups via usernames or profile URLs.

---

## 🛠️ Key Features

### 1. Dual Input & URL Parameter Modes
- **Local File Upload**: Drag-and-drop or select any `.xml` file exported from the Meta Achievements settings page.
- **Username & Profile URL Input**: Paste any Meta Achievements username (e.g. `TheAndromedaCat`) or full profile URL (e.g. `https://meta-achievements.org/achievements.html?username=TheAndromedaCat` or `https://meta-achievements.org/api/userXML/TheAndromedaCat.xml`).
- **Direct URL Linking**: Supports deep-linking query parameters (e.g. `https://xml.meta-achievements.org/?user=TheAndromedaCat` or `?username=TheAndromedaCat`). Upon opening, the viewer automatically fetches, parses, and displays the user's profile XML.

### 2. User ID Privacy Protection & XML Download
- **Online Fetch Mode**: When profile data is loaded via Username or Profile URL, the viewer automatically **hides the user's internal authentication User ID** (`Username: TheAndromedaCat`) for privacy.
- **Download XML Button**: A **"Download XML File"** button appears on the right side of the profile card when searching by username. Clicking this button exports the profile XML while automatically **omitting the internal 32-bit UUID token** (`<user_id>TheAndromedaCat</user_id>`) to protect private user keys.
- **Local File Mode**: When viewing a local `.xml` file uploaded from disk, the User ID is displayed (`ID: 101... | Username: TheAndromedaCat`).

### 3. Profile Summary & Stats Card
- **User Header**: Displays the user's display name, profile avatar, username, and export timestamp.
- **Stats Dashboard**:
  - **Games Tracked**: Total games in the user's profile.
  - **100% Completed**: Number of games with all achievements unlocked.
  - **Achievements Unlocked**: Total count of unlocked achievements.
  - **Earned Score**: Earned score vs. total potential score across all games.

### 4. Interactive Game Cards & Badges
- **100% Completion Gold Borders**: Games with 100% completion feature a gold border gradient and a `100% Complete` badge.
- **Platform Exclusives**: Displays platform tags for exclusive titles (`Rift`, `Go`, `Quest 3`). Default Quest titles omit platform tags.
- **Collapsible Achievements**: Each game card features a `SHOW ACHIEVEMENTS` / `HIDE ACHIEVEMENTS` toggle button.
- **Multi-Level Image Fallbacks**:
  - Primary achievement icon (`unlocked_image_url` / `locked_image_url`).
  - Fallback to game cover icon (`app_icon_url`).
  - Fallback to `🏆` (Unlocked) / `🔒` (Locked) emoji.

### 5. Search & Filtering
- **Real-Time Search**: Search input filters game titles and achievement descriptions instantly.
- **Filter Tabs**:
  - **All Games**: Shows all tracked games.
  - **100% Completed**: Filters only fully completed games.
  - **In Progress**: Filters games with remaining locked achievements.

---

## 📑 Supported XML Schema Specification

The viewer parses XML documents conforming to the following structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<account_data>
  <profile>
    <user_id>12345678901234567</user_id>
    <username>TheAndromedaCat</username>
    <display_name>Andromeda</display_name>
    <profile_picture_url>https://meta-achievements.org/api/profile-avatar/TheAndromedaCat</profile_picture_url>
    <games_tracked>12</games_tracked>
    <completed_games>3</completed_games>
    <total_achievements_unlocked>85</total_achievements_unlocked>
    <total_score_earned>1450</total_score_earned>
    <total_score_potential>2200</total_score_potential>
    <last_synced_at>2026-07-30T18:45:12.345Z</last_synced_at>
    <exported_at>2026-07-30T20:27:00.000Z</exported_at>
  </profile>
  <games>
    <game>
      <app_id>2031736060288351</app_id>
      <app_name>Asgard's Wrath 2</app_name>
      <platform>Quest 3</platform>
      <app_icon_url>https://meta-achievements.org/cdn/images/2031736060288351/app_icon.png</app_icon_url>
      <total_achievements>45</total_achievements>
      <unlocked_achievements>45</unlocked_achievements>
      <is_complete>true</is_complete>
      <earned_score>1000</earned_score>
      <potential_score>1000</potential_score>
      <achievements>
        <achievement>
          <id>1270062758377706</id>
          <api_name>ACH_GOD_SLAYER</api_name>
          <title>God Slayer</title>
          <description>Defeat the final boss in Ancient Egypt.</description>
          <unlocked>true</unlocked>
          <unlock_date>2026-06-15T14:30:00Z</unlock_date>
          <score>100</score>
          <unlocked_image_url>https://meta-achievements.org/cdn/images/2031736060288351/1270062758377706_unlocked.png</unlocked_image_url>
          <locked_image_url>https://meta-achievements.org/cdn/images/2031736060288351/1270062758377706_locked.png</locked_image_url>
        </achievement>
      </achievements>
    </game>
  </games>
</account_data>
```

---

## 🚀 Deployment

The Meta Achievements XML Test Viewer is static HTML/CSS/JS and deploys natively to **Cloudflare Pages**, GitHub Pages, or any static host.

---

## 🤝 Project Attribution

- **Host Organization**: [Not a Glitch Studios](https://www.notaglitch.net/)
- **Lead Developer on GUI & App**: [TheAndromedaCat](https://www.andromedacat.net/) [ᴳᴴ](https://github.com/TheAndromedaCat)
- **API Backend & Original Website Development**: [DenHBR](https://meta-achievements.onrender.com/) [ᴳᴴ](https://github.com/DenHBR)
- **Help with database work**: [QuestStoreDB](https://queststoredb.com/)
