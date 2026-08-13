import type { Article } from "./types";

export const gifeed: Article = {
  slug: "gifeed-with-tca",
  title: "Gifeed with The Composable Architecture (TCA)",
  summary:
    "An introduction to TCA in a real GIF browser — from a search bar reducer to composing features, effects, and dependencies.",
  date: "2024-04-15",
  dateLabel: "Apr 15, 2024",
  readTime: "5 min",
  tag: "TCA",
  hero: "/images/writing/gifeed/a2-thumbnail.png",
  heroAlt: "Gifeed app overview",
  repo: {
    href: "https://github.com/travisxcode/Gifeed",
    label: "Gifeed on GitHub",
  },
  blocks: [
    {
      type: "p",
      parts: [
        "This project provides an introduction to the practices of the Composable Architecture, from simple business logic to more sophisticated flows. TCA allows us to set up the project in a way that is systematically designed for modularization and reusability.",
      ],
    },
    {
      type: "image",
      src: "/images/writing/gifeed/grid.png",
      alt: "Gifeed GIF grid",
    },
    { type: "h2", text: "Motivation" },
    {
      type: "p",
      parts: [
        "When starting a new project, it's important to consider which design patterns are best suited to the project's complexity. This project demonstrates practical, real-world problems and solutions using TCA. The aim is to showcase ",
        { bold: "TCA as the future of Swift development" },
        ", even extending beyond just iOS applications, by providing basic examples and more intricate logic with clear documentation.",
      ],
    },
    { type: "callout", parts: ["Go TCA or go home"] },
    { type: "h2", text: "TCA in a Nutshell" },
    {
      type: "image",
      src: "/images/writing/gifeed/tca-diagram.png",
      alt: "TCA structure diagram",
    },
    {
      type: "p",
      parts: [
        "The Composable Architecture consists of a few key pieces:",
      ],
    },
    {
      type: "callout",
      parts: [
        "For a full introduction, see ",
        {
          href: "https://github.com/pointfreeco/swift-composable-architecture",
          text: "The Composable Architecture",
        },
        " by Brandon Williams and Stephen Celis.",
      ],
    },
    {
      type: "p",
      parts: [
        { bold: "Action" },
        " — an ",
        { code: "enum" },
        " of every event that can affect state: taps, system events, or anything from outside the feature.",
      ],
    },
    {
      type: "p",
      parts: [
        { bold: "Reducer" },
        " — a ",
        { code: "function" },
        " that runs whenever an action is sent to the store. It mutates state and returns effects to run, such as API requests.",
      ],
    },
    {
      type: "p",
      parts: [
        { bold: "State" },
        " — a ",
        { code: "struct" },
        " describing the data the reducer can read and write.",
      ],
    },
    {
      type: "p",
      parts: [
        { bold: "Effect" },
        " — an ",
        { code: "asynchronous" },
        " unit of work that can dispatch new actions: a network request, audio, and so on.",
      ],
    },
    {
      type: "p",
      parts: [
        { bold: "Dependency" },
        " — API clients, analytics, and other services the reducer needs to ",
        { bold: "perform side effects" },
        ".",
      ],
    },
    {
      type: "p",
      parts: [
        { bold: "Store" },
        " — ",
        { bold: "runtime state management" },
        " that holds a slice of the app and evolves as the reducer processes actions.",
      ],
    },
    { type: "h2", text: "Dive into feature Search" },
    {
      type: "p",
      parts: [
        "Let's start with a smaller piece — the search bar — then compose it into a larger view.",
      ],
    },
    {
      type: "image",
      src: "/images/writing/gifeed/search-bar.jpg",
      alt: "Gifeed search bar",
      compact: true,
    },
    {
      type: "p",
      parts: [
        "The snippet implements a SearchBar reducer and SearchBarView. TCA's state management reacts to input and drives search.",
      ],
    },
    { type: "h2", text: "The Reducer Declaration" },
    {
      type: "code",
      code: `struct SearchBar {
  @ObservableState
  struct State {
    var textField: String = ""
  }
}`,
    },
    {
      type: "callout",
      parts: [
        { code: "@ObservableState" },
        " observes changes automatically. ",
        { code: "textField" },
        " is the user's input.",
      ],
    },
    { type: "h2", text: "Actions" },
    {
      type: "code",
      code: `enum Action: BindableAction, Equatable {
  case binding(BindingAction<State>)
  case textFieldChanged(String)
  case textFieldChangedRelay(String)
  case startSearch(String)
  case resetSearch
}`,
    },
    { type: "h2", text: "Reducer Body" },
    {
      type: "code",
      code: `@Reducer
struct SearchBar {
  @ObservableState
  struct State { /* ... */ }
  enum Action: BindableAction, Equatable { /* ... */ }

  enum CancelID { case timer }

  var body: some ReducerOf<Self> {
    BindingReducer()
    Reduce { state, action in
      switch action {
      case .textFieldChanged(let text):
        return .run { send in
          try await Task.sleep(for: .seconds(2))
          await send(.textFieldChangedRelay(text))
        }

      case .textFieldChangedRelay(let text):
        return .run { [textField = state.textField] send in
          if text == textField {
            await send(text.isEmpty ? .resetSearch : .startSearch(text))
          }
        }

      case .startSearch(_), .resetSearch, .binding:
        return .none
      }
    }
  }
}`,
    },
    {
      type: "p",
      parts: [
        { code: ".textFieldChanged" },
        " waits two seconds before ",
        { code: ".textFieldChangedRelay" },
        " — a debounce so rapid typing does not fire a search on every key.",
      ],
    },
    { type: "h2", text: "View" },
    {
      type: "callout",
      parts: [
        "This also avoids the double-fire on text change by using ",
        {
          href: "https://developer.apple.com/documentation/swiftui/view/onchange(of:initial:_:)-8wgw9",
          text: "onChange(of:initial:_:)",
        },
        ".",
      ],
    },
    {
      type: "code",
      code: `struct SearchBarView: View {
  @Bindable var store: StoreOf<SearchBar>

  var body: some View {
    HStack {
      Image(systemName: "magnifyingglass")
      TextField("Search Giphy", text: $store.textField)
        .onChange(of: store.textField) { _, newValue in
          store.send(.textFieldChanged(newValue))
        }
    }
  }
}`,
    },
    {
      type: "p",
      parts: [
        "The view binds a ",
        { code: "TextField" },
        " to the store and sends ",
        { code: "store.send(.textFieldChanged(newValue))" },
        " on change.",
      ],
    },
    { type: "h2", text: "Composition" },
    {
      type: "p",
      parts: [
        "As the name suggests, the architecture makes the feature systematically ",
        { bold: "composable" },
        ".",
      ],
    },
    {
      type: "image",
      src: "/images/writing/gifeed/tca-composition.png",
      alt: "Search feature composition",
    },
    {
      type: "p",
      parts: [
        { code: "State" },
        " holds the query plus child state for ",
        { code: "SearchBar" },
        " and ",
        { code: "SearchGifs" },
        ".",
      ],
    },
    {
      type: "code",
      code: `@Reducer
struct Search {
  @ObservableState
  struct State {
    var searchQuery = ""
    var searchBar = SearchBar.State()
    var searchGifs = SearchGifs.State()
  }
}`,
    },
    {
      type: "callout",
      parts: [
        { code: "SearchView" },
        " is compositional. It does not bind SwiftUI controls itself, so the parent action does not need to be a ",
        { code: "BindableAction" },
        ".",
      ],
    },
    { type: "h2", text: "Reducer Logic" },
    {
      type: "code",
      code: `@Reducer
struct Search {
  @ObservableState
  struct State { /* ... */ }
  enum Action { /* ... */ }

  @Dependency(\\.searchClient) var searchClient
  private enum CancelID { case gifs, stickers }

  var body: some ReducerOf<Self> {
    Scope(state: \\.searchBar, action: \\.searchBar) { SearchBar() }
    Scope(state: \\.searchGifs, action: \\.searchGifs) { SearchGifs() }

    Reduce { state, action in
      switch action {
      case .searchBar(.startSearch(let text)):
        state.searchQuery = text
        guard !state.searchQuery.isEmpty else {
          state.searchGifs.gifCards = []
          return .cancel(id: CancelID.gifs)
        }
        return .run { send in await send(.search) }

      case .searchBar(.resetSearch):
        state.searchGifs.gifCards = []
        return .cancel(id: CancelID.gifs)

      case .search:
        guard !state.searchQuery.isEmpty else { return .none }
        return .run { [query = state.searchQuery] send in
          if let gifs = try? await self.searchClient.search(query) {
            await send(.searchSuccess(gifs))
          }
        }
        .cancellable(id: CancelID.gifs)

      case .searchSuccess(let gifs):
        gifs
          .map { GifItem.State.Mapper.map($0) }
          .forEach { state.searchGifs.gifCards.insert($0, at: .zero) }
        return .none

      case .searchBar, .searchGifs:
        return .none
      }
    }
  }
}`,
    },
    {
      type: "p",
      parts: [
        "When search starts, we update ",
        { code: "searchQuery" },
        ". Reset clears results. ",
        { code: ".search" },
        " hits ",
        { code: "searchClient" },
        ". ",
        { code: ".searchSuccess" },
        " maps GIFs into the list.",
      ],
    },
    { type: "h2", text: "Building the UI" },
    {
      type: "code",
      code: `struct SearchView: View {
  var store: StoreOf<Search>

  var body: some View {
    VStack {
      SearchBarView(
        store: store.scope(state: \\.searchBar, action: \\.searchBar)
      )
      SearchGifsView(
        store: store.scope(state: \\.searchGifs, action: \\.searchGifs)
      )
    }
  }
}`,
    },
    {
      type: "p",
      parts: [
        "Each child is scoped to its slice of state. That is what keeps the architecture modular.",
      ],
    },
    { type: "h2", text: "Reference" },
    {
      type: "p",
      parts: [
        "Source: ",
        {
          href: "https://github.com/travisxcode/Gifeed",
          text: "github.com/travisxcode/Gifeed",
        },
        ".",
      ],
    },
  ],
};
