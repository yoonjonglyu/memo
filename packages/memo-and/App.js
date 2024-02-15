import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return Platform.OS === 'web' ? (
    <iframe src='https://yoonjonglyu.github.io/memo/' height={'100%'} width={'100%'} />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://yoonjonglyu.github.io/memo/' }}
        style={{ marginTop: 22, flex: 1 }}
      />
    </View>
  );
}
