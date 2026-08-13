import type { Article } from "./types";

export const datepicker: Article = {
  slug: "exploring-swiftui-datepicker-styles",
  title: "Exploring SwiftUI DatePicker Styles",
  summary:
    "SwiftUI provides a versatile, one-line way to implement date pickers — displayed components, date ranges, and styles.",
  date: "2024-03-22",
  dateLabel: "Mar 22, 2024",
  readTime: "2 min",
  tag: "SwiftUI",
  hero: "/images/writing/datepicker/a1-thumbnail.png",
  heroAlt: "SwiftUI DatePicker styles on iPhone",
  repo: {
    href: "https://github.com/travisxcode/Calendars",
    label: "Calendars on GitHub",
  },
  blocks: [
    {
      type: "p",
      parts: [
        "SwiftUI provides a versatile and user-friendly way to implement date pickers in your iOS apps. Let's explore the capabilities of SwiftUI's DatePicker by delving into a Swift code example.",
      ],
    },
    { type: "h2", text: "Introduction" },
    {
      type: "p",
      parts: [
        "The ",
        { code: "DatePicker" },
        " in SwiftUI allows users to select dates or times, and it comes with various customization options. In the code snippet provided, we have a ",
        { code: "DatePickerView" },
        " containing different sections showcasing the DatePicker's features.",
      ],
    },
    {
      type: "image",
      src: "/images/writing/datepicker/a1-gif-1.gif",
      alt: "DatePicker styles animating on iPhone",
      compact: true,
    },
    { type: "h2", text: "Displayed Components" },
    {
      type: "p",
      parts: [
        "By specifying the ",
        { code: "displayedComponents" },
        " you can choose whether to show the date, time, or both. For instance:",
      ],
    },
    {
      type: "callout",
      parts: [
        "Experiment with these styles to find the one that best suits your application's design.",
      ],
    },
    {
      type: "code",
      code: `struct DatePickerView: View {
  @State private var date = Date()

  var body: some View {
    NavigationView {
      List {
        Section(header: Text("Displayed Components")) {
          DatePicker("Default", selection: $date)
          DatePicker("Date", selection: $date, displayedComponents: .date)
          DatePicker("Time", selection: $date, displayedComponents: .hourAndMinute)
        }
      }
      .navigationTitle("DatePicker")
      .navigationBarTitleDisplayMode(.large)
    }
  }
}`,
    },
    {
      type: "p",
      parts: [
        "These examples display the default, date-only, and time-only pickers, respectively.",
      ],
    },
    {
      type: "image",
      src: "/images/writing/datepicker/a1-image-1.png",
      alt: "DatePicker displayed components",
      compact: true,
    },
    { type: "h2", text: "Date Range" },
    {
      type: "p",
      parts: [
        "You can limit the selectable dates by using the ",
        { code: "in" },
        " parameter. For example:",
      ],
    },
    {
      type: "code",
      code: `struct DatePickerView: View {
  @State private var date = Date()

  var body: some View {
    NavigationView {
      List {
        Section(header: Text("Displayed Components")) { /* ... */}
        Section(header: Text("Date Range")) {
          DatePicker("Until Today", selection: $date, in: ...Date(), displayedComponents: .date)
          DatePicker("From Today", selection: $date, in: Date()..., displayedComponents: .date)
        }
      }
      .navigationTitle("DatePicker")
      .navigationBarTitleDisplayMode(.large)
    }
  }
}`,
    },
    {
      type: "p",
      parts: [
        "In these instances, the first ",
        { code: "DatePicker" },
        " allows selection up to the current date, while the second one only allows dates starting from today.",
      ],
    },
    {
      type: "image",
      src: "/images/writing/datepicker/a1-image-2.png",
      alt: "DatePicker date range",
      compact: true,
    },
    { type: "h2", text: "Styles" },
    {
      type: "p",
      parts: [
        "The final section showcases different styles available for the DatePicker. SwiftUI provides styles such as ",
        { code: ".automatic" },
        ", ",
        { code: ".compact" },
        ", ",
        { code: ".graphical" },
        ", and ",
        { code: ".wheel" },
        ". Here's how you can apply them:",
      ],
    },
    {
      type: "code",
      code: `struct DatePickerView: View {
  @State private var date = Date()

  var body: some View {
    NavigationView {
      List {
        Section(header: Text("Displayed Components")) { /* ... */}
        Section(header: Text("Date Range")) { /* ... */}
        Section(header: Text("STYLE")) {
          DatePicker("Automatic", selection: $date, in: ...Date(), displayedComponents: .date)
            .datePickerStyle(.automatic)
          DatePicker("Compact", selection: $date, in: ...Date(), displayedComponents: .date)
            .datePickerStyle(.compact)
          DatePicker("Graphical", selection: $date, in: ...Date(), displayedComponents: .date)
            .datePickerStyle(.graphical)
          DatePicker("Graphical", selection: $date, in: ...Date(), displayedComponents: .date)
            .datePickerStyle(.wheel)
        }
      }
      .navigationTitle("DatePicker")
      .navigationBarTitleDisplayMode(.large)
    }
  }
}`,
    },
    {
      type: "p",
      parts: [
        "Experiment with these styles to find the one that best suits your application's design.",
      ],
    },
    {
      type: "image",
      src: "/images/writing/datepicker/a1-image-3.png",
      alt: "DatePicker style variants",
      compact: true,
    },
    { type: "h2", text: "Reference" },
    {
      type: "p",
      parts: [
        "For further details, see the official SwiftUI documentation on ",
        {
          href: "https://developer.apple.com/documentation/swiftui/datepicker",
          text: "DatePicker",
        },
        ". Source: ",
        {
          href: "https://github.com/travisxcode/Calendars",
          text: "github.com/travisxcode/Calendars",
        },
        ".",
      ],
    },
  ],
};
