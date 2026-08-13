import type { Article } from "./types";

export const gifViewer: Article = {
  slug: "gif-viewer-with-caching",
  title: "GIF Viewer with Caching Mechanism",
  summary:
    "Combine SwiftUI with WebKit to load GIFs from URLs, with NSCache so the same file is not downloaded twice.",
  date: "2024-05-11",
  dateLabel: "May 11, 2024",
  readTime: "5 min",
  tag: "SwiftUI",
  hero: "/images/writing/gif-viewer/a3-thumbnail.png",
  heroAlt: "GIF viewer screens on iPhone",
  repo: {
    href: "https://github.com/travisxcode/Gifeed",
    label: "Gifeed on GitHub",
  },
  blocks: [
    {
      type: "p",
      parts: [
        "Let's dive into a fun and practical application of combining SwiftUI with WebKit in your iOS projects. We're going to create a ",
        { code: "GifWebView" },
        " that loads and displays GIFs from URLs right within your Swift app.",
      ],
    },
    {
      type: "image",
      src: "/images/writing/gif-viewer/gifs.gif",
      alt: "GIF grid loading in the viewer",
    },
    {
      type: "p",
      parts: [
        "The cool part? We'll make sure it does this efficiently by using some smart caching techniques. So, whether you're looking to add some flair to your app with animated GIFs or just want to sharpen your development skills, this guide is for you.",
      ],
    },
    { type: "h2", text: "Setting Up Our WebView" },
    {
      type: "p",
      parts: [
        "First off, we need a web view where our GIFs will play. In SwiftUI, we can integrate a WebKit view using the ",
        { code: "UIViewRepresentable" },
        " protocol. This setup allows us to use ",
        { code: "WKWebView" },
        " seamlessly in our SwiftUI layout. Here's how we kick things off:",
      ],
    },
    {
      type: "code",
      code: `func makeUIView(context: Context) -> WKWebView {
  let config = WKWebViewConfiguration()
  config.websiteDataStore = .nonPersistent()  // Keeps our web view from saving any data
  let webView = WKWebView(frame: .zero, configuration: config)
  loadGIF(webView: webView)  // Here's where the magic happens!
  return webView
}`,
    },
    {
      type: "p",
      parts: [
        "We set up our web view not to store any data persistently, making it perfect for loading transient content like GIFs without hogging your device's storage.",
      ],
    },
    { type: "h2", text: "Loading the GIFs" },
    {
      type: "p",
      parts: [
        "Now, the fun part — loading the GIFs! We've got a neat little method called ",
        { code: "loadGIF(webView:)" },
        " that does the heavy lifting:",
      ],
    },
    {
      type: "code",
      code: `private func loadGIF(webView: WKWebView) {
  guard let url = URL(string: urlString) else { return }

  var request = URLRequest(url: url)
  request.httpShouldHandleCookies = false

  GifCacheRepository.shared.getGIFData(for: request) { data in
    guard let data else { return }

    DispatchQueue.main.async {
      webView.load(
        data,
        mimeType: "image/gif",
        characterEncodingName: "UTF-8",
        baseURL: url
      )
    }
  }
}`,
    },
    {
      type: "p",
      parts: [
        "We make sure the URL is valid, create a request, and then check our cache. If the GIF isn't there, we download it, cache it, and load it into the web view. This means you get to see your GIFs faster and save on data usage over time.",
      ],
    },
    { type: "h2", text: "Efficient Caching with NSCache" },
    {
      type: "p",
      parts: [
        "Let's talk about how we keep those GIFs ready to roll without constantly re-downloading them. We use a singleton class called ",
        { code: "GifCacheRepository" },
        " which employs ",
        { code: "NSCache" },
        " to store GIF data:",
      ],
    },
    {
      type: "code",
      code: `final class GifCacheRepository {
  static let shared = GifCacheRepository()
  private var cache = NSCache<NSURL, NSData>()

  func getGIFData(for request: URLRequest, completion: @escaping (Data?) -> Void) {
    guard let url = request.url else { return completion(nil) }

    if let cached = cache.object(forKey: url as NSURL) {
      return completion(cached as Data)
    }

    URLSession.shared.dataTask(with: request) { data, response, error in
      guard let data, error == nil else { return completion(nil) }

      this.cache.setObject(data as NSData, forKey: url as NSURL)
      completion(data)
    }.resume()
  }
}`,
    },
    {
      type: "p",
      parts: [
        "This setup is neat because once a GIF is loaded, it stays in the cache. The next time you need the same GIF, it loads instantly from the cache instead of downloading it again. This speeds up your app and reduces network load.",
      ],
    },
    { type: "h2", text: "Let's Preview" },
    {
      type: "code",
      code: `struct SimpleGifView: View {
  var gifUrl: String = ""

  var body: some View {
    GifWebView(urlString: gifUrl)
  }
}

#Preview {
  SimpleGifView(
    gifUrl: "https://media1.giphy.com/media/bgOQ2Mx4uLnsoyyIg9/giphy.gif"
  )
}`,
    },
    {
      type: "image",
      src: "/images/writing/gif-viewer/simple-gif.gif",
      alt: "Simple GIF preview in SwiftUI",
      compact: true,
    },
    { type: "h2", text: "Wrapping It Up" },
    {
      type: "p",
      parts: [
        "Combining ",
        { code: "WKWebView" },
        " with SwiftUI using ",
        { code: "UIViewRepresentable" },
        " is a powerful way to enhance your app with web content. By adding a robust caching mechanism, we ensure that your app remains quick and efficient, especially when handling media like GIFs.",
      ],
    },
  ],
};
