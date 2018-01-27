var myChart = echarts.init(document.getElementById('main'));
var myChart1 = echarts.init(document.getElementById('main1'));
var option = {
            title: { text: '药材关系展示', left: 'center', subtext: '齐鲁补土流派数据管理系统' },
            tooltip: {
                formatter: function (x) {
                    return x.data.value;
                }
            },
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    // 圆球大小
                    symbolSize: 50,
                    roam: true,
                    // arrow 箭头属性
                    edgeSymbol: ['circle'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize:20
                            }
                        }
                    },
                    force: {
                        repulsion: 2500,
                        edgeLength: [10, 50]
                    },
                    draggable: true,
                    itemStyle: {
                        normal: {
                            color: '#4b565b'
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#4b565b'

                        }
                    },
                    edgeLabel: {
                        normal: {
                            show: true,
                            formatter: function (x) {
                                // 二者关系 name
                                console.log(x.data);
                                //return x.data.source+x.data.target+'占比：'+x.data.name;
                                 return x.data.name;
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                            }
                        }
                    },
                    data: [
                        {
                            name: '生白芍',
                            des: '药材昂贵',
                            symbolSize: 60,
                            // 单独设置 样式
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '柴胡',
                            des: '药材昂贵'
                        }, {
                            name: '川芎',
                            des: ''
                        }, {
                            name: '炒枳壳',
                            des: ''
                        }, {
                            name: '青竹茹',
                            des: ''
                        }, {
                            name: '决明子',
                            des: '',
                            symbolSize: 60,
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }
                    ],
                    links: [
                        {
                            source: '生白芍',
                            target: '柴胡',
                            name: '50%',
                            des: '侯亮平是高育良的得意门生',
                            value:'二者出现次数为：'+80
                        }, {
                            source: '生白芍',
                            target: '川芎',
                            name: '50%',
                            value:'二者出现次数为：'+180
                        }, {
                            source: '生白芍',
                            target: '炒枳壳',
                            name: '50%',
                            value:'二者出现次数为：'+80
                        }, {
                            source: '生白芍',
                            target: '青竹茹',
                            name: '26.9%',
                            value:'二者出现次数为：'+80
                        }, {
                            source: '生白芍',
                            target: '决明子',
                            name: '50%',
                            value:'二者出现次数为：'+80,
                            lineStyle: {
                                normal: {
                                   // type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: '决明子',
                            target: '柴胡',
                            name: '12.8%',
                            value:'二者出现次数为：'+3
                        }, {
                            source: '决明子',
                            target: '川芎',
                            name: '50%',
                            value:'二者出现次数为：'+20
                        }, {
                            source: '决明子',
                            target: '炒枳壳',
                            name: '1.78%',
                            value:'二者出现次数为：'+80
                        }, {
                            source: '决明子',
                            target: '青竹茹',
                            name: '0.35%',
                            value:'二者出现次数为：'+8
                        }]
                }
            ]
        };
        option1 = {
            title: { text: '药材关系展示', left: 'center', subtext: '齐鲁补土流派数据管理系统' },
            tooltip: {
                formatter: function (x) {
                    return x.data.value;
                }
            },
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    // 圆球大小
                    symbolSize: 50,
                    roam: true,
                    // arrow 箭头属性
                    edgeSymbol: ['circle'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize:20
                            }
                        }
                    },
                    force: {
                        repulsion: 2500,
                        edgeLength: [10, 50]
                    },
                    draggable: true,
                    itemStyle: {
                        normal: {
                            color: '#4b565b'
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#4b565b'

                        }
                    },
                    edgeLabel: {
                        normal: {
                            show: true,
                            formatter: function (x) {
                                // 二者关系 name
                                console.log(x.data);
                                //return x.data.source+x.data.target+'占比：'+x.data.name;
                                 return x.data.name;
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                            }
                        }
                    },
                    data: [
                        {
                            name: '生白芍',
                            des: '药材昂贵',
                            symbolSize: 60,
                            // 单独设置 样式
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            }
                        }, {
                            name: '柴胡',
                            des: '药材昂贵'
                        }, {
                            name: '川芎',
                            des: ''
                        }, {
                            name: '炒枳壳',
                            des: ''
                        }, {
                            name: '青竹茹',
                            des: ''
                        }, {
                            name: '决明子',
                            des: ''  
                        }, {
                            name: '扁蓄',
                            des: ''  
                        }, {
                            name: '瞿麦',
                            des: ''  
                        }, {
                            name: '人参',
                            des: ''  
                        }, {
                            name: '炒白术',
                            des: ''  
                        }, {
                            name: '砂仁',
                            des: ''  
                        }, {
                            name: '甘草',
                            des: ''  
                        }, {
                            name: '银花',
                            des: ''  
                        }, {
                            name: '薄荷',
                            des: ''  
                        }, {
                            name: '丹皮',
                            des: ''  
                        }, {
                            name: '荆芥',
                            des: ''  
                        }, {
                            name: '当归',
                            des: ''  
                        }, {
                            name: '连翘',
                            des: ''  
                        }, {
                            name: '地肤子',
                            des: ''  
                        }, {
                            name: '苦参',
                            des: ''  
                        }
                    ],
                    links: [
                        {
                            source: '生白芍',
                            target: '柴胡',
                            name: '50%',
                            des: '侯亮平是高育良的得意门生',
                            value:'二者出现次数为：'+80
                        }, {
                            source: '生白芍',
                            target: '川芎',
                            name: '50%',
                            value:'二者出现次数为：'+180
                        }, {
                            source: '生白芍',
                            target: '炒枳壳',
                            name: '50%',
                            value:'二者出现次数为：'+80
                        }, {
                            source: '生白芍',
                            target: '青竹茹',
                            name: '26.9%',
                            value:'二者出现次数为：'+80
                        }, {
                            source: '生白芍',
                            target: '决明子',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        } ,{
                            source: '生白芍',
                            target: '扁蓄',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '瞿麦',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '人参',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '炒白术',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '砂仁',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '甘草',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '银花',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '薄荷',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '丹皮',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '荆芥',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '当归',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '地肤子',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '苦参',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }, {
                            source: '生白芍',
                            target: '连翘',
                            name: '50%',
                            value:'二者出现次数为：'+80
                            
                        }]
                }
            ]
        };
        myChart.setOption(option);
        myChart1.setOption(option1);