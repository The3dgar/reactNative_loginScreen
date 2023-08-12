import { StyleSheet, View } from 'react-native';

export const Sticker = () => {
  return (
    <>
      <View style={styles.strong} />
      <View style={styles.opaque} />
    </>
  );
};

const styles = StyleSheet.create({
  strong: {
    backgroundColor: '#7762ff',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 120,
    elevation: 5,
    opacity: 0.5,
    borderBottomStartRadius: 110,
    borderBottomEndRadius: 200,
  },
  opaque: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#7762ff',
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 100,
    elevation: 6,
    opacity: 0.5,
    overflow: 'hidden',
  },
});
