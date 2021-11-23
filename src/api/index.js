import { recommendList, newList } from './home'
import { hotSearch, Search } from './search'
import { getSongById, getLyricById } from './Play'
export const recommendMusicAPI = recommendList
export const newSongAPI = newList
export const hotSearchAPI = hotSearch
export const SearchAPI = Search
export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据
