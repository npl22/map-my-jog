# Component Hierarchy

**LoginFormContainer**
 - LoginForm

**NavBarContainer**
 - NavBar

**SplashPageContainer**
 - SplashPage

## Homepage

**HomePageContainer**
 - HomePage
  + ActivityFeedContainer
  + DashboardContainer

**ActivityFeedContainer**
 - ActivityFeed
  + ActivityFeedItem

**DashboardContainer**
 - Dashboard
  + DashboardStatsContainer
  + RecentRoutesContainer

**DashboardStatsContainer**
 - DashboardStats

**RecentRoutesContainer**
 - RecentRoutes
  + RecentRouteItem

## Create a Route

**CreateRouteContainer**
 - CreateRoute
  + MapSidePanelContainer
  + Map
  + RouteContainer

**MapSidePanelContainer**
 - MapSidePanel
  + SearchSidePanelContainer
  + RouteStatsContainer

**SearchSidePanelContainer**
 - SearchSidePanel

**RouteStatsContainer**
 - RouteStats

**RouteContainer**
  - Route

## Find a Route

**FindRouteContainer**
 - FindRoute
  + SearchFormContainer
  + Map
  + MapNodesContainer
  + SearchResultsContainer

**SearchFormContainer**
 - SearchForm

**MapNodesContainer**
 - MapNodes
  - MapNode

**SearchResultsContainer**
 - SearchResults
  + SearchResult

## View a Route

**RouteDetailContainer**
 - RouteDetail
  + RouteStatsContainer
  + Map

**RouteStatsContainer**
 - RouteStats

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashPageContainer" |
| "/sign-up" | "LoginFormContainer" |
| "/log-in" | "LoginFormContainer" |
| "/home" | "HomePageContainer" |
| "/home/activity-feed" | "ActivityFeedContainer" |
| "/home/dashboard" | "DashboardContainer" |
| "/create-route" | "CreateRouteContainer" |
| "/find-route" | "FindRouteContainer" |
| "/route/:routeId" | "RouteDetailContainer" |
