# M3U8 Link Checker Pro

<div align="center">

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![Language](https://img.shields.io/badge/language-TypeScript-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-Production%20Ready-brightgreen.svg)

**Advanced Streaming Link Verification Tool**

[Features](#features) • [Installation](#installation) • [Usage](#usage) • [Supported Formats](#supported-formats)

</div>

---

## Overview

**M3U8 Link Checker Pro** is a professional-grade web application for verifying streaming links with real-time monitoring, multi-format support, and beautiful user interface.

Perfect for:
- 📺 Streaming platform administrators
- 🎬 Content creators
- 🔍 Link quality assurance
- 📊 Bulk link verification
- 🎯 Playlist management

---

## ✨ Features

### 🎨 Modern Design
- **Dark Theme**: Sleek, modern interface with gradient backgrounds
- **Smooth Animations**: Buttery smooth transitions and effects
- **Responsive Layout**: Perfect on mobile, tablet, and desktop
- **Professional UI**: Enterprise-grade components and styling

### 📺 Advanced Media Player
- **Multi-Format Support**: HLS, DASH, MP4, and 20+ other formats
- **Channel Information**: Display logos, names, and groups
- **Live Indicators**: Real-time playback status
- **Smart Controls**: PiP, Cast, and full playback controls
- **Error Handling**: Automatic fallback and recovery

### 🔍 Intelligent Link Checker
- **Batch Verification**: Check multiple links simultaneously
- **Real-time Progress**: Visual feedback during checking
- **Detailed Statistics**: Success rate, response times, status codes
- **Export Feature**: Download working links as text
- **Response Headers**: View complete HTTP response information

### 📋 Playlist Management
- **M3U/M3U8 Support**: Load entire playlists instantly
- **Channel Organization**: Auto-grouped by category
- **Smart Search**: Quick channel filtering and discovery
- **Live Preview**: Watch while browsing

### 🎯 Performance
- **Fast Verification**: Rapid link status checking
- **Optimized Performance**: 750KB production build
- **Low Latency**: Streaming with adaptive bitrate
- **Error Recovery**: Automatic fallback mechanisms

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Radeshopp/link-m8.git
cd link-m8

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun run dev
```

### Build for Production

```bash
npm run build
# or
bun run build
```

The production files will be in the `dist/` directory.

---

## 💻 Usage

### Check Individual Links
1. Paste streaming URLs in the input field (one per line)
2. Click **"Check Links"**
3. Wait for verification to complete
4. View results in organized tabs
5. Click **"Play"** to watch in the built-in player

### Load M3U Playlist
1. Paste your M3U/M3U8 playlist URL
2. Press **"Check Links"**
3. All channels will load automatically
4. Browse and select channels to watch
5. Search to find specific channels

### Export Results
1. After verification, click **"Export Working Links"**
2. Working links will download as `.txt` file
3. Use for further processing or sharing

---

## 📊 Supported Formats

### Streaming Protocols
- 🎬 **HLS**: `.m3u8`, `.m3u`
- 📺 **DASH**: `.mpd`

### Video Formats
- **MP4** (.mp4) - Most common
- **WebM** (.webm)
- **OGV** (.ogv)
- **MOV** (.mov)
- **FLV** (.flv)
- **AVI** (.avi)
- **MKV** (.mkv)
- **MPEG-TS** (.ts, .mts, .m2ts)

### Audio Formats
- **MP3** (.mp3)
- **AAC** (.aac)
- **WAV** (.wav)
- **OGG** (.ogg)
- **FLAC** (.flac)
- **WMA** (.wma)
- **OPUS** (.opus)

---

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6)
- **Accent**: Cyan (#06b6d4)
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)
- **Warning**: Amber (#f59e0b)

### Typography
- **UI Font**: Inter (modern, clean)
- **Code Font**: Fira Code (monospace)
- **Font Sizes**: Responsive and accessible

---

## 📈 Features Breakdown

### Link Verification
```javascript
Status Codes:
✅ 200-299: Working
🟡 300-399: Redirect
🔴 400+: Error
```

### Statistics Display
- Total links checked
- Working links count
- Broken links count
- Success rate percentage
- Response time per link

### Response Information
- HTTP Status Code
- Response Time (ms)
- Content-Type Header
- Server Information
- Additional Headers

---

## 🔐 Security & Privacy

- ✅ **Client-Side Processing**: All verification happens in your browser
- ✅ **No Server Storage**: Your links are never stored
- ✅ **CORS Handling**: Secure cross-origin requests
- ✅ **No Tracking**: Complete privacy guaranteed

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **HLS.js** - HLS streaming
- **Lucide Icons** - Icons

### Build Tools
- **Vite** - Fast bundler
- **ESBuild** - TypeScript compilation
- **PostCSS** - CSS processing

### Development
- **ESLint** - Code quality
- **TypeScript** - Type checking
- **React Router** - Navigation

---

## 📁 Project Structure

```
link-m8/
├── src/
│   ├── components/
│   │   ├── LinkChecker.tsx
│   │   ├── MediaPlayer.tsx
│   │   ├── ResponseDetails.tsx
│   │   ├── media/
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── MediaControls.tsx
│   │   │   └── useScreenOrientation.ts
│   │   └── playlist/
│   │       ├── PlaylistView.tsx
│   │       └── ChannelList.tsx
│   ├── pages/
│   │   └── Index.tsx
│   ├── lib/
│   │   ├── checkLink.ts
│   │   ├── m3uParser.ts
│   │   └── utils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── dist/
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🎯 Roadmap

### Upcoming Features
- [ ] Dark/Light theme toggle
- [ ] Link history caching
- [ ] Advanced filtering options
- [ ] Batch playlist upload
- [ ] Export to M3U format
- [ ] Link quality testing
- [ ] Performance analytics

---

## 🐛 Bug Reports

Found a bug? Please create an issue on GitHub with:
1. Detailed description
2. Steps to reproduce
3. Browser and version
4. Screenshots (if applicable)

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

---

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👤 Author

**Radeshopp**

---

## 🙏 Acknowledgments

- React community
- Tailwind CSS
- Shadcn UI
- HLS.js developers
- All contributors

---

## 📞 Support

For support, email or open an issue on GitHub.

---

## 🌟 Show Your Support

If you found this tool helpful, please give it a ⭐ on GitHub!

---

<div align="center">

**Made with ❤️ for the streaming community**

[↑ Back to Top](#m3u8-link-checker-pro)

</div>
