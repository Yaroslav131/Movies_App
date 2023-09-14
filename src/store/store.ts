import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import topicSlice, { SetTopics } from '@/slices/topicSlice';
import taskSlice, { setTasks } from '@/slices/taskSlice';
import subTaskSlice, { setSubTasks } from '@/slices/subTaskSlice';
import modalSlice from '@/slices/modalSlice';

const store = configureStore({
  reducer: {
    topics: topicSlice,
    tasks: taskSlice,
    subTasks: subTaskSlice,
    modal: modalSlice,
  },
});

const saveDataToAsyncStorage = async (key: string, data: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {

  }
};

export const loadDataFromAsyncStorage = async () => {
  try {
    const topicsData = await AsyncStorage.getItem('topics');
    const tasksData = await AsyncStorage.getItem('tasks');
    const subTasksData = await AsyncStorage.getItem('subTasks');
    if (topicsData) {
      store.dispatch(SetTopics(JSON.parse(topicsData)));
    }
    if (tasksData) {
      store.dispatch(setTasks(JSON.parse(tasksData)));
    }
    if (subTasksData) {
      store.dispatch(setSubTasks(JSON.parse(subTasksData)));
    }
  } catch (error) {

  }
};

store.subscribe(() => {
  const state = store.getState();
  saveDataToAsyncStorage('topics', state.topics);
  saveDataToAsyncStorage('tasks', state.tasks);
  saveDataToAsyncStorage('subTasks', state.subTasks);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
