$(document).on("click", "[data-link]", function (e) {
    attr = $(this).attr("data-link")

    $(".overlay").addClass("opened")
    $(".overlay-item[data-overlay=" + attr + "]").addClass("opened")
})

$(document).on("click", ".overlay-item__close-btn", function (e) {
    $(".overlay").find(".opened").removeClass("opened")
    $(".overlay").removeClass("opened")
})


$(document).on("click", ".characteristics-tabs__item", function (e) {
    $(this).parent().children(".characteristics-tabs__item").removeClass("selected")
    $(this).addClass("selected")

    $(this).parent().parent().parent().find(".characteristics-content").children(".characteristics-list").removeClass("selected")
    $(this).parent().parent().parent().find(".characteristics-content").children(".characteristics-list").eq($(this).index()).addClass("selected")
})

$(document).on("click", "[data-pagginator] .pagginator__next", function (e) {
    attr = $(this).parent().attr("data-pagginator")
    pagginator_items = $(this).parent().find(".paggination-ul").children(".paggination-ul__item")
    content_items = $("[data-paggination=" + attr + "]").children("li")

    current_index = $(this).parent().find(".selected").index()
    length = $(pagginator_items).length

    if(current_index + 1 == length) {
        $(pagginator_items).removeClass("selected")
        $(pagginator_items).eq(0).addClass("selected")

        $(content_items).removeClass("selected")
        $(content_items).eq(0).addClass("selected")
    } else {
        $(pagginator_items).removeClass("selected")
        $(pagginator_items).eq(current_index + 1).addClass("selected")

        $(content_items).removeClass("selected")
        $(content_items).eq(current_index + 1).addClass("selected")
    }
})

$(document).on("click", "[data-pagginator] .pagginator__prev", function (e) {
    attr = $(this).parent().attr("data-pagginator")
    pagginator_items = $(this).parent().find(".paggination-ul").children(".paggination-ul__item")
    content_items = $("[data-paggination=" + attr + "]").children("li")

    current_index = $(this).parent().find(".selected").index()
    length = $(pagginator_items).length

    if(current_index - 1 < 0) {
        $(pagginator_items).removeClass("selected")
        $(pagginator_items).eq(length - 1).addClass("selected")

        $(content_items).removeClass("selected")
        $(content_items).eq(length - 1).addClass("selected")
    } else {
        $(pagginator_items).removeClass("selected")
        $(pagginator_items).eq(current_index - 1).addClass("selected")

        $(content_items).removeClass("selected")
        $(content_items).eq(current_index - 1).addClass("selected")
    }
})
$(document).on("click", "[data-pagginator] .paggination-ul__item", function (e) {
    attr = $(this).parent().parent().attr("data-pagginator")
    pagginator_items = $(this).parent().children(".paggination-ul__item")
    content_items = $("[data-paggination=" + attr + "]").children("li")

    current_index = $(this).index()

    $(pagginator_items).removeClass("selected")
    $(pagginator_items).eq(current_index).addClass("selected")

    $(content_items).removeClass("selected")
    $(content_items).eq(current_index).addClass("selected")
})

assortment_list = [
    {
        id: 1,
        gallery_items: [
            {
                id: 1,
                src: "img/gallery-item.png"
            },
            {
                id: 2,
                src: "img/gallery-item-2.png"
            },
            {
                id: 3,
                src: "img/gallery-item-3.png"
            },
        ],
        characteristics: [
            {
                id: 1,
                title: "XS",
                content: [
                    {
                        id: 1,
                        title: "Высота изделия:",
                        value: "50 см"
                    },
                    {
                        id: 2,
                        title: "Ширина изделия:",
                        value: "50 см"
                    },
                    {
                        id: 3,
                        title: "Длина рукава:",
                        value: "54 см"
                    },
                ]
            },
            {
                id: 2,
                title: "S",
                content: [
                    {
                        id: 1,
                        title: "Высота изделия:",
                        value: "52 см"
                    },
                    {
                        id: 2,
                        title: "Ширина изделия:",
                        value: "52 см"
                    },
                    {
                        id: 3,
                        title: "Длина рукава:",
                        value: "52 см"
                    },
                ]
            },
            {
                id: 3,
                title: "M",
                content: [
                    {
                        id: 1,
                        title: "Высота изделия:",
                        value: "54 см"
                    },
                    {
                        id: 2,
                        title: "Ширина изделия:",
                        value: "54 см"
                    },
                    {
                        id: 3,
                        title: "Длина рукава:",
                        value: "54 см"
                    },
                ]
            }
        ],
        description: [
            {
                id: 1,
                title: "Прямой силуэт",
                text: "Свободный крой с минимальным прилеганием подойдет на любую фигуру."
            },
            {
                id: 2,
                title: "Расширенный вырез",
                text: "Горловина с отделочной строчкой придает лонгсливу аккуратный и законченный вид."
            },
            {
                id: 3,
                title: "Втачные рукава",
                text: "Манжета на запястье надежно фиксирует рукав. А естественный переход ткани от плеча к руке делает фасон завершенным."
            },
        ]
    },
    {
        id: 2,
        gallery_items: [
            {
                id: 1,
                src: "img/gallery-item-4.png"
            },
            {
                id: 2,
                src: "img/gallery-item-5.png"
            },
            {
                id: 3,
                src: "img/gallery-item-6.png"
            },
        ],
        characteristics: [
            {
                id: 1,
                title: "XS",
                content: [
                    {
                        id: 1,
                        title: "Высота изделия:",
                        value: "50 см"
                    },
                    {
                        id: 2,
                        title: "Ширина изделия:",
                        value: "50 см"
                    },
                    {
                        id: 3,
                        title: "Длина рукава:",
                        value: "54 см"
                    },
                ]
            },
            {
                id: 2,
                title: "S",
                content: [
                    {
                        id: 1,
                        title: "Высота изделия:",
                        value: "52 см"
                    },
                    {
                        id: 2,
                        title: "Ширина изделия:",
                        value: "52 см"
                    },
                    {
                        id: 3,
                        title: "Длина рукава:",
                        value: "52 см"
                    },
                ]
            },
            {
                id: 3,
                title: "M",
                content: [
                    {
                        id: 1,
                        title: "Высота изделия:",
                        value: "54 см"
                    },
                    {
                        id: 2,
                        title: "Ширина изделия:",
                        value: "54 см"
                    },
                    {
                        id: 3,
                        title: "Длина рукава:",
                        value: "54 см"
                    },
                ]
            }
        ],
        description: [
            {
                id: 1,
                title: "Полуприлегающий силуэт",
                text: "Заманчиво повторяет очертания фигуры, но не демонстрирует ее полностью. Плотнее всего топ прилегает к телу по линии талии (немного выше или ниже)."
            },
            {
                id: 2,
                title: "Удобные бретели",
                text: "Цельнокроеные широкие бретели не соскальзывают с плечей и полностью перекрывают собой лямки от бюстгальтера."
            },
            {
                id: 3,
                title: "«Правильная» резинка",
                text: "Фиксирующая лента не дает топу задираться и поддерживает грудь, но при этом не стягивает кожу. Это позволяет носить его не только дома, но и на занятиях фитнесом."
            },
        ]
    },
    {
        id: 3,
        gallery_items: [
            {
                id: 1,
                src: "img/gallery-item-7.png"
            },
            {
                id: 2,
                src: "img/gallery-item-8.png"
            },
            {
                id: 3,
                src: "img/gallery-item-9.png"
            },
        ],
        characteristics: [
            {
                id: 1,
                title: "XS",
                content: [
                    {
                        id: 1,
                        title: "Длина изделия по боковому шву:",
                        value: "98 см"
                    }
                ]
            },
            {
                id: 2,
                title: "S",
                content: [
                    {
                        id: 1,
                        title: "Длина изделия по боковому шву:",
                        value: "98 см"
                    }
                ]
            },
            {
                id: 3,
                title: "M",
                content: [
                    {
                        id: 1,
                        title: "Длина изделия по боковому шву:",
                        value: "98 см"
                    }
                ]
            }
        ],
        description: [
            {
                id: 1,
                title: "Свободный крой",
                text: "Завышенная талия делает фигуру женственной и привлекательной, не ограничивая движения. Такие брюки отлично подойдут не только в качестве любимой домашней одежды, но и для занятий спортом."
            },
            {
                id: 2,
                title: "«Правильная» резинка",
                text: "Удерживает брюки на поясе, не давая ткани соскальзывать вниз. Длина фиксирующей ленты подобрана так, чтобы не мешать сну и активному отдыху."
            },
            {
                id: 3,
                title: "Боковые карманы",
                text: "Всегда практичное дополнение к штанам. Карманы вшиты в боковые швы и выполнены в тон изделия, поэтому не акцентируют на себе лишнего внимания."
            },
        ]
    }
]


$(".assortment-tabs__item").on("click", function (e) {
    var attr = $(this).attr("data-tab");
    var gallery = $(".assortment-gallery").find(".gallery-ul");
    var description = $(".assortment-description").find("ul");
    var characteristics = $(".characteristics");
    var paggination_ul = $(".assortment-gallery__footer").find(".paggination-ul")

    $(this).parent().children(".assortment-tabs__item").removeClass("selected")
    $(this).addClass("selected")

    gallery.empty();
    paggination_ul.empty();

    assortment_list[attr].gallery_items.forEach(function(item) {
        if(item.id == 1) {
            gallery.append(`
                <li class="gallery-ul__item selected">
                    <img src="${item.src}" alt="">
                </li>
            `);

            paggination_ul.append(`
                <li class="paggination-ul__item selected"></li>
            `);
        }
        if(item.id > 1) {
            gallery.append(`
                <li class="gallery-ul__item">
                    <img src="${item.src}" alt="">
                </li>
            `);

            paggination_ul.append(`
                <li class="paggination-ul__item"></li>
            `);
        }
    });

    description.empty();

    assortment_list[attr].description.forEach(function(item) {
        description.append(`
            <li>
                <h4 class="assortment-description__h4">${item.title}</h4>
                <p class="assortment-description__p">${item.text}</p>
            </li>
        `);
    });

    $(characteristics).find(".characteristics-tabs").empty();
    $(characteristics).find(".characteristics-content").empty();

    assortment_list[attr].characteristics.forEach(function(item) {
        if(item.id == 1) {
            $(characteristics).find(".characteristics-tabs").append(`
                <div class="characteristics-tabs__item selected">${item.title}</div>
            `);

            characteristics_html = `<ul class="characteristics-list selected">`

            item.content.forEach(function(content_item) {(
                characteristics_html += `
                    <li class="characteristics-list__item">
                        <span>${content_item.title}</span>
                        <span>${content_item.value}</span>
                    </li>
                `);
            });

            if(item.id == assortment_list[attr].characteristics.length - 1) {
                characteristics_html += `</ul>`

                $(characteristics).find(".characteristics-content").append(characteristics_html)

                console.log(characteristics_html)
            }
        } 
        if (item.id > 1) {
            $(characteristics).find(".characteristics-tabs").append(`
                <div class="characteristics-tabs__item">${item.title}</div>
            `);

            characteristics_html = `<ul class="characteristics-list">`

            item.content.forEach(function(content_item) {(
                characteristics_html += `
                    <li class="characteristics-list__item">
                        <span>${content_item.title}</span>
                        <span>${content_item.value}</span>
                    </li>
                `);
            });

            if(item.id == assortment_list[attr].characteristics.length - 1) {
                characteristics_html += `</ul>`

                $(characteristics).find(".characteristics-content").append(characteristics_html)
            }
        }
    });
});


$(document).ready(function() {
    // Получаем элементы, с которыми будем работать
    const sizeItems = $(".size-ranges__item");
    const sizeTable = $(".size-table tbody tr");
    let isDragging = false; // Флаг для определения, происходит ли перемещение ползунка

    // Функция для обновления подходящего размера
    function updateSize() {
      let maxChest = 0;
      let maxWaist = 0;
      let maxHips = 0;

      // Находим максимальные значения объемов груди, талии и бедер
      sizeItems.each(function() {
        const chest = parseInt($(this).find(".size-ranges__value").eq(0).text(), 10);
        const waist = parseInt($(this).find(".size-ranges__value").eq(1).text(), 10);
        const hips = parseInt($(this).find(".size-ranges__value").eq(2).text(), 10);

        maxChest = Math.max(maxChest, chest);
        maxWaist = Math.max(maxWaist, waist);
        maxHips = Math.max(maxHips, hips);
      });

      let selectedSize = "N/A";

      // Проходим по всем строкам таблицы и сравниваем значения
      sizeTable.each(function() {
        const row = $(this);
        const size = row.find("td").eq(0).text();
        const minChest = parseInt(row.find("td").eq(1).text().split("-")[0], 10);
        const maxChest = parseInt(row.find("td").eq(1).text().split("-")[1], 10);
        const minWaist = parseInt(row.find("td").eq(2).text().split("-")[0], 10);
        const maxWaist = parseInt(row.find("td").eq(2).text().split("-")[1], 10);
        const minHips = parseInt(row.find("td").eq(3).text().split("-")[0], 10);
        const maxHips = parseInt(row.find("td").eq(3).text().split("-")[1], 10);

        if (
          maxChest >= minChest && maxChest <= maxChest &&
          maxWaist >= minWaist && maxWaist <= maxWaist &&
          maxHips >= minHips && maxHips <= maxHips
        ) {
          selectedSize = size;
          return false; // Выходим из цикла, т.к. размер уже найден
        }
      });

      // Обновляем значение в элементе size-result__value
      $(".size-result__value").text(selectedSize);
    }

    // Обработчик события при начале перемещения ползунка
    $(".range__handler").on("mousedown", function() {
      isDragging = true;
    });

    // Обработчик события при перемещении ползунка
    $(document).on("mousemove", function(event) {
      if (isDragging) {
        const rangeHandler = $(event.target);
        const rangeLine = rangeHandler.parent().find(".range__line");
        const rangeValue = rangeHandler.parent().find(".size-ranges__value");

        const rangeWidth = rangeLine.width();
        const handlerWidth = rangeHandler.width();
        const minPosition = 0;
        const maxPosition = rangeWidth - handlerWidth;

        const mouseX = event.pageX - rangeLine.offset().left;
        let newPosition = mouseX - handlerWidth / 2;

        if (newPosition < minPosition) {
          newPosition = minPosition;
        } else if (newPosition > maxPosition) {
          newPosition = maxPosition;
        }

        rangeHandler.css("left", newPosition + "px");

        // Обновляем значение объема в зависимости от положения ползунка
        const percentage = (newPosition / maxPosition) * 100;
        rangeValue.text(Math.round(percentage * 100) / 100 + " см");
      }
    });

    // Обработчик события при окончании перемещения ползунка
    $(document).on("mouseup", function() {
      if (isDragging) {
        isDragging = false;
        // Обновляем подходящий размер при завершении перемещения ползунка
        updateSize();
      }
    });
  });


$("a[href^='#']").on("click", function(event) {
    // Предотвращаем стандартное поведение ссылки (переход по якорю)
    event.preventDefault();

    // Получаем целевой блок, к которому нужно выполнить скролл
    const targetBlock = $($(this).attr("href"));

    // Выполняем плавный скролл к целевому блоку
    $("html, body").animate({
    scrollTop: targetBlock.offset().top
    }, 1000); // Время анимации в миллисекундах (здесь 1000 мс = 1 сек)
});

$(".carousel__prev").on("click", function(event) {
    content_list = $(this).parent().find(".carousel-list")
    
    pages = ($(content_list).children(".carousel-item").length / 3)
    current_page = $(content_list).attr("data-page")

    if(current_page - 1 < 0) {
        $(content_list).css("transform", "translateX(-" + ((pages - 1) * 100) + "%)")

        $(content_list).attr("data-page", pages - 1)
    } else {
        $(content_list).css("transform", "translateX(-" + ((current_page - 1) * 100) + "%)")

        $(content_list).attr("data-page", current_page - 1)
    }
});

$(".carousel__next").on("click", function(event) {
    content_list = $(this).parent().find(".carousel-list")
    
    pages = ($(content_list).children(".carousel-item").length / 3)
    current_page = $(content_list).attr("data-page")

    if((parseInt(current_page) + 1) == pages) {
        $(content_list).css("transform", "translateX(-" + 0 + "%)")

        $(content_list).attr("data-page", 0)
    } else {
        $(content_list).css("transform", "translateX(-" + ((current_page + 1) * 100) + "%)")

        $(content_list).attr("data-page", (parseInt(current_page) + 1))
    }
});

$(document).on("click", ".gallery-thumbnails__item", function (e) {
    gallery = $(this).parent().parent().find(".gallery-list").children(".gallery-list__item")
    scrollbar = $(this).parent().parent().find(".gallery-scrollbar__line")

    current_index = $(this).index()
    lenght = $(gallery).length

    $(gallery).removeClass("selected")
    $(gallery).eq(current_index).addClass("selected")

    $(scrollbar).css("height", ((current_index + 1)/lenght) * 100 + "%")
});

order_list = [
    {
        id: 1,
        title: "Топ + Брюки",
        colors: [
            {
                id: 1,
                color_code: "#323232",
                gallery_items: [
                    {
                        id: 1,
                        src: "img/order-gallery-6.png"
                    },
                    {
                        id: 2,
                        src: "img/order-gallery-7.png"
                    },
                    {
                        id: 3,
                        src: "img/order-gallery-8.png"
                    },
                    {
                        id: 4,
                        src: "img/order-gallery-9.png"
                    },
                    {
                        id: 5,
                        src: "img/order-gallery-10.png"
                    },
                ]
            },
            {
                id: 2,
                color_code: "#fff",
                gallery_items: [
                    {
                        id: 1,
                        src: "img/order-gallery-1.png"
                    },
                    {
                        id: 2,
                        src: "img/order-gallery-2.png"
                    },
                    {
                        id: 3,
                        src: "img/order-gallery-3.png"
                    },
                    {
                        id: 4,
                        src: "img/order-gallery-4.png"
                    },
                    {
                        id: 5,
                        src: "img/order-gallery-5.png"
                    },
                ]
            }
        ],
        characteristics: [
            {
                id: 1,
                title: "XS",
                content: [
                    {
                        id: 1,
                        title: "Высота изделия:",
                        value: "50 см"
                    },
                    {
                        id: 2,
                        title: "Ширина изделия:",
                        value: "50 см"
                    },
                    {
                        id: 3,
                        title: "Длина рукава:",
                        value: "54 см"
                    },
                ]
            },
            {
                id: 2,
                title: "S",
                content: [
                    {
                        id: 1,
                        title: "Высота изделия:",
                        value: "52 см"
                    },
                    {
                        id: 2,
                        title: "Ширина изделия:",
                        value: "52 см"
                    },
                    {
                        id: 3,
                        title: "Длина рукава:",
                        value: "52 см"
                    },
                ]
            },
            {
                id: 3,
                title: "M",
                content: [
                    {
                        id: 1,
                        title: "Высота изделия:",
                        value: "54 см"
                    },
                    {
                        id: 2,
                        title: "Ширина изделия:",
                        value: "54 см"
                    },
                    {
                        id: 3,
                        title: "Длина рукава:",
                        value: "54 см"
                    },
                ]
            }
        ]
    }
]

$("#order-select").on("change", function(e) {
    var selected_option = $(this).val()
    var gallery = $(".order-gallery").find(".gallery-list")
    var thumbnails = $(".order-gallery").find(".gallery-thumbnails")
    var colors = $(".order-info").find(".color-list")
    const foundItem = order_list.find(item => item.title === selected_option);

    $(gallery).empty()
    $(thumbnails).empty()

    foundItem.colors[0].gallery_items.forEach(function(item) {
        if(item.id == 1) {
            $(gallery).append(`
                <li class="gallery-list__item selected">
                    <img src="${item.src}" alt="">
                </li>
            `)

            $(thumbnails).append(`
                <li class="gallery-thumbnails__item selected">
                    <img src="${item.src}" alt="">
                </li>
            `)
        }
        if(item.id > 1) {
            $(gallery).append(`
                <li class="gallery-list__item">
                    <img src="${item.src}" alt="">
                </li>
            `)

            $(thumbnails).append(`
                <li class="gallery-thumbnails__item">
                    <img src="${item.src}" alt="">
                </li>
            `)
        }
    })

    $(colors).empty()

    foundItem.colors.forEach(function(item) {
        if(item.id == 1) {
            $(colors).append(`
                <div class="color-list__item selected">
                    <div class="color-list__dot" style="background-color: ${item.color_code};"></div>
                </div>
            `)
        }
        if(item.id > 1) {
            $(colors).append(`
                <div class="color-list__item">
                    <div class="color-list__dot" style="background-color: ${item.color_code};"></div>
                </div>
            `)
        }
    })
})
$(document).on("click", ".size-list__item", function (e) {
    sizes_list = $(this).parent().parent().parent().parent().find(".characteristics-list")

    $(this).parent().children(".size-list__item").removeClass("selected")
    $(this).addClass("selected")

    const foundItem = order_list.find(item => item.title === $("#order-select").val());
    const sizes = foundItem.characteristics.find(item => item.title === $(this).text())

    $(sizes_list).empty()

    sizes.content.forEach(function(item) {
        sizes_list.append(`
            <li class="characteristics-list__item">
                <span>${item.title}</span>
                <span>${item.value}</span>
            </li>
        `)
    })

    galleryScrollbarUpdate()
})

$(document).on("click", ".color-list__item", function (e) {
    sizes_list = $(this).parent().parent().parent().parent().find(".characteristics-list")

    $(this).parent().children(".color-list__item").removeClass("selected")
    $(this).addClass("selected")

    const foundItem = order_list.find(item => item.title === $("#order-select").val());
    const colors = foundItem.colors.find(item => item.title === $(this).text())

    $(sizes_list).empty()

    sizes.content.forEach(function(item) {
        sizes_list.append(`
            <li class="characteristics-list__item">
                <span>${item.title}</span>
                <span>${item.value}</span>
            </li>
        `)
    })

    galleryScrollbarUpdate()
})

function galleryScrollbarUpdate() {
    scrollbar_line = $(".gallery-scrollbar__line")
    current_index = $(scrollbar_line).parent().parent().find(".gallery-list").children(".selected").index()
    length = $(scrollbar_line).parent().parent().find(".gallery-list").children(".gallery-list__item").length

    console.log(current_index, length)

    $(scrollbar_line).css("height", ((current_index + 1)/length) * 100 + "%")
}

$(document).ready(function (e) {
    galleryScrollbarUpdate()
})

$(".m-btn").on("click", function(e) {
    $(".m-menu").toggleClass("opened")
})

function orderFormUpdate() {
    var selected_option = $("#order-select").val()
    var selected_size = $(".size-list__item.selected").text()
    var selected_color = $(".color-list__item.selected").attr("data-color")

    const selectedItem = order_list.find(item => item.title === selected_option);
    const sizes = foundItem.characteristics.find(item => item.title === selected_size)
    const selected_color = foundItem.colors.find(item => item.title === selected_color)

    sizes.content.forEach(function(item) {
        sizes_list.append(`
            <li class="characteristics-list__item">
                <span>${item.title}</span>
                <span>${item.value}</span>
            </li>
        `)
    })

}