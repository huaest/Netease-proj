import request from '@/utils/request'

export const hotSearch = (params) =>
  request({
    url: '/search/hot',
    params,
  })

export const Search = (params) =>
  request({
    url: '/cloudsearch',
    params,
  })
