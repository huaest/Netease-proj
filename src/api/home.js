import request from '@/utils/request'

export const recommendList = (params) =>
  request({
    url: '/personalized',
    params,
  })

export const newList = (params) =>
  request({
    url: '/personalized/newsong',
    params,
  })
