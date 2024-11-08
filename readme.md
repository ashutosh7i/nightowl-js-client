# Night Owl JavaScript Client 🦉

> A seamless JavaScript client for the powerful [night-owl🦉](https://github.com/your-username/night-owl) logging system.

## 🌟 Introduction

The Night Owl JavaScript Client is a robust and easy-to-use library that allows you to effortlessly integrate the [night-owl🦉](https://github.com/your-username/night-owl) logging system into your web applications. With this client, you can quickly send logs with custom tags and retrieve them based on specific criteria, ensuring your application's visibility and debugging capabilities.

## ✨ Key Features

- **Seamless Integration**: The Night Owl JavaScript Client provides a simple and intuitive API, making it a breeze to incorporate into your project.
- **Tag-based Logging**: Organize your logs by associating them with custom tags, enabling efficient retrieval and analysis.
- **Asynchronous Operations**: All logging and log retrieval operations are asynchronous, ensuring your application's responsiveness.
- **Automatic Error Handling**: The client intelligently handles errors, logging them to the console and gracefully recovering from issues.
- **Minimal Dependencies**: The client has a lightweight footprint, with only the necessary dependencies to keep your project streamlined.

## 🚀 Getting Started

### Installation

Install the Night Owl JavaScript Client using npm:

```bash
npm install night-owl-js-client
```

### Usage

1. Import the `initNightOwlClient` function from the `night-owl-js-client` package:

   ```javascript
   import initNightOwlClient from 'night-owl-js-client';
   ```

2. Initialize the client with the Night Owl server's API URL:

   ```javascript
   const NightOwl = initNightOwlClient('https://api.example.com');
   ```

3. Start logging and retrieving logs:

   ```javascript
   // Sending a log with a "User" tag
   NightOwl.log('User', 'User registered', {
     userId: '12345',
     email: 'user@example.com',
   });

   // Retrieving logs with the "User" tag
   const userLogs = await NightOwl.getLogs('User');
   console.log(userLogs);
   ```

## 📚 API Reference

### `initNightOwlClient(apiUrl: string)`

Initializes the Night Owl JavaScript Client with the provided API URL.

**Parameters:**
- `apiUrl` (string): The base URL of the Night Owl API endpoint.

**Returns:**
- `NightOwlClient`: An instance of the `NightOwlClient` class.

### `NightOwlClient.log(tag: string, message: string, data: any)`

Sends a log entry to the Night Owl server.

**Parameters:**
- `tag` (string): The tag to associate with the log entry.
- `message` (string): The message to be logged.
- `data` (any): Additional data to be included with the log entry.

### `NightOwlClient.getLogs(tag: string)`

Retrieves log entries from the Night Owl server based on the provided tag.

**Parameters:**
- `tag` (string): The tag to filter the log entries.

**Returns:**
- `Promise<any[]>`: An array of log entries matching the specified tag.

## 📦 Available SDKs

- [Night Owl Flutter Client](https://pub.dev/packages/night_owl_flutter)
- [Night Owl Python Client](https://pypi.org/project/night-owl-python/)

## 🤝 Contributing

Contributions to the Night Owl JavaScript Client are welcome! If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by Ashutosh7i