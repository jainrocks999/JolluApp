import React, { Component } from 'react';
import { View,TouchableOpacity, StyleSheet, Image, Text, Dimensions, SafeAreaView, FlatList, ScrollView } from 'react-native'
import Colors from '../../Config/Color/Colors.js';
import { SliderBox } from 'react-native-image-slider-box'
import HeaderView from '../../Config/Header';
import StatusBar from '../../Config/StatusBar';

  var products = [ 
        {
            "id": 4803653730348,
            "title": "membership",
            "body_html": "<div class=\"prodcut-content\" style=\"text-align: left;\">\n<h1>99</h1>\n<span>99.00 MONTHLY</span>\n<ul>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Min duration 1 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Watch on your laptop, TV, phone and tablet 1 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Full HD and 4K available 1 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Unlimited movies and Web series 1 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>24/7 Tech Support 1 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Cancel anytime 1 month</li>\n<li>VISA DEBIT CARD ACCEPTED IN SHOPPING CART</li>\n</ul>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "",
            "created_at": "2020-03-26T17:29:54+05:30",
            "handle": "membership-1",
            "updated_at": "2020-05-12T12:05:30+05:30",
            "published_at": "2020-03-26T17:23:32+05:30",
            "template_suffix": "subscription",
            "published_scope": "web",
            "tags": "",
            "admin_graphql_api_id": "gid://shopify/Product/4803653730348",
            "variants": [
                {
                    "id": 33118503108652,
                    "product_id": 4803653730348,
                    "title": "Default Title",
                    "price": "99.00",
                    "sku": "",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": null,
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-26T17:58:40+05:30",
                    "updated_at": "2020-05-10T17:34:10+05:30",
                    "taxable": false,
                    "barcode": "",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34936383864876,
                    "inventory_quantity": -6,
                    "old_inventory_quantity": -6,
                    "requires_shipping": false,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/33118503108652"
                }
            ],
            "options": [
                {
                    "id": 6214329139244,
                    "product_id": 4803653730348,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 15359108612140,
                    "product_id": 4803653730348,
                    "position": 1,
                    "created_at": "2020-04-02T11:40:58+05:30",
                    "updated_at": "2020-04-02T11:40:58+05:30",
                    "alt": null,
                    "width": 1280,
                    "height": 794,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/new-menbership.png?v=1585807858",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/15359108612140"
                }
            ],
            "image": {
                "id": 15359108612140,
                "product_id": 4803653730348,
                "position": 1,
                "created_at": "2020-04-02T11:40:58+05:30",
                "updated_at": "2020-04-02T11:40:58+05:30",
                "alt": null,
                "width": 1280,
                "height": 794,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/new-menbership.png?v=1585807858",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/15359108612140"
            }
        },
        {
            "id": 4861151281196,
            "title": "membership Auto renew",
            "body_html": "WARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.",
            "vendor": "jolluvideos",
            "product_type": "",
            "created_at": "2020-03-31T17:17:44+05:30",
            "handle": "membership-2",
            "updated_at": "2020-05-12T11:18:46+05:30",
            "published_at": null,
            "template_suffix": "",
            "published_scope": "web",
            "tags": "Subscription",
            "admin_graphql_api_id": "gid://shopify/Product/4861151281196",
            "variants": [
                {
                    "id": 33262751580204,
                    "product_id": 4861151281196,
                    "title": "Default Title",
                    "price": "99.00",
                    "sku": "",
                    "position": 1,
                    "inventory_policy": "continue",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": null,
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-31T17:17:44+05:30",
                    "updated_at": "2020-03-31T17:17:44+05:30",
                    "taxable": false,
                    "barcode": "",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 35090553831468,
                    "inventory_quantity": 2,
                    "old_inventory_quantity": 2,
                    "requires_shipping": false,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/33262751580204"
                }
            ],
            "options": [
                {
                    "id": 6277767233580,
                    "product_id": 4861151281196,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [],
            "image": null
        },
        {
            "id": 4804012965932,
            "title": "Quarterly membership",
            "body_html": "<div class=\"prodcut-content\" style=\"text-align: left;\">\n<div class=\"prodcut_month\">\n<h1>249</h1>\n<span>83.00 MONTHLY</span>\n</div>\n<ul>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Min duration 3 months</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Watch on your laptop, TV, phone and tablet 3 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Full HD and 4K available 3 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Unlimited movies and Web series 1 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>24/7 Tech Support 3 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Cancel anytime 3 month</li>\n<li>VISA DEBIT CARD ACCEPTED IN PAYMENT GATEWAY</li>\n</ul>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "",
            "created_at": "2020-03-26T18:05:29+05:30",
            "handle": "quarterly-membership",
            "updated_at": "2020-05-12T11:18:46+05:30",
            "published_at": "2020-03-26T18:05:29+05:30",
            "template_suffix": "subscription",
            "published_scope": "web",
            "tags": "",
            "admin_graphql_api_id": "gid://shopify/Product/4804012965932",
            "variants": [
                {
                    "id": 33118706040876,
                    "product_id": 4804012965932,
                    "title": "Default Title",
                    "price": "249.00",
                    "sku": "",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": null,
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-26T18:05:29+05:30",
                    "updated_at": "2020-05-10T17:36:01+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34936591876140,
                    "inventory_quantity": 2,
                    "old_inventory_quantity": 2,
                    "requires_shipping": false,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/33118706040876"
                }
            ],
            "options": [
                {
                    "id": 6214727270444,
                    "product_id": 4804012965932,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 15359915229228,
                    "product_id": 4804012965932,
                    "position": 1,
                    "created_at": "2020-04-02T12:18:29+05:30",
                    "updated_at": "2020-04-02T12:18:29+05:30",
                    "alt": null,
                    "width": 1280,
                    "height": 794,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/new-menbership_b54a914a-8888-4f53-bf52-59a394f7763b.png?v=1585810109",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/15359915229228"
                }
            ],
            "image": {
                "id": 15359915229228,
                "product_id": 4804012965932,
                "position": 1,
                "created_at": "2020-04-02T12:18:29+05:30",
                "updated_at": "2020-04-02T12:18:29+05:30",
                "alt": null,
                "width": 1280,
                "height": 794,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/new-menbership_b54a914a-8888-4f53-bf52-59a394f7763b.png?v=1585810109",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/15359915229228"
            }
        },
        {
            "id": 4861227073580,
            "title": "Quarterly membership Auto renew",
            "body_html": "WARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.",
            "vendor": "jolluvideos",
            "product_type": "",
            "created_at": "2020-03-31T17:27:46+05:30",
            "handle": "quarterly-membership-1",
            "updated_at": "2020-05-12T11:18:46+05:30",
            "published_at": null,
            "template_suffix": "",
            "published_scope": "web",
            "tags": "Subscription",
            "admin_graphql_api_id": "gid://shopify/Product/4861227073580",
            "variants": [
                {
                    "id": 33262933213228,
                    "product_id": 4861227073580,
                    "title": "Default Title",
                    "price": "249.00",
                    "sku": "",
                    "position": 1,
                    "inventory_policy": "continue",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": null,
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-31T17:27:46+05:30",
                    "updated_at": "2020-03-31T17:27:46+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 35090764038188,
                    "inventory_quantity": 2,
                    "old_inventory_quantity": 2,
                    "requires_shipping": false,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/33262933213228"
                }
            ],
            "options": [
                {
                    "id": 6277848301612,
                    "product_id": 4861227073580,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [],
            "image": null
        },
        {
            "id": 4743657062444,
            "title": "RJ - Rex Jemi | Tamil web series - Part 1",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>25 Mins</li>\n<li>18+</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<div class=\"info\">\n<p>Actors: <strong></strong>Rakesh, pavi</p>\n<p>Directors: S.M.Mohammed Azarudeen</p>\n<p>Year of Release: 2020</p>\n<p>Rex is a romantic, sexy and attitude filled guy. He is a dancer in professional. Jemi- A rich girl .  Jemi is a fan follower of Rex's dance and followed him continuously. Rex wanted to have sex with her and he wanted to grab her money. Soon both fall in love and started dating. They both had sex many times and started enjoying as lovers. Whenever they had a fight, Jemi used to gift him. So for expensive gifts, Rex started fighting with her often. In a fight Jemi tells about her ex-lover and engagement made with him. so Jemi ended the fight with break up. Rex got fed up and he don't want the marriage to happen but couldn't stop it. After 4 months he realised his mistakes and concentrated in his dance profession to achieve his aim. He wanted to meet Jemi and they met, they again stick to each other. Rex wants to give all the happiness to Jemi before her marriage with her ex-lover. Finally Rex left Jemi- making her fulfilled in their</p>\n<p>love...        RexJemib</p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-17T12:59:30+05:30",
            "handle": "rj-rex-jemi",
            "updated_at": "2020-05-12T11:18:46+05:30",
            "published_at": "2020-03-20T21:07:00+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "hindi, tamil, telugu",
            "admin_graphql_api_id": "gid://shopify/Product/4743657062444",
            "variants": [
                {
                    "id": 32901933760556,
                    "product_id": 4743657062444,
                    "title": "Default Title",
                    "price": "0.00",
                    "sku": "404510457",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": null,
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-17T12:59:30+05:30",
                    "updated_at": "2020-05-01T11:51:03+05:30",
                    "taxable": true,
                    "barcode": "rsisl10lHbA",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34707049676844,
                    "inventory_quantity": 0,
                    "old_inventory_quantity": 0,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/32901933760556"
                }
            ],
            "options": [
                {
                    "id": 6142071734316,
                    "product_id": 4743657062444,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 14926992703532,
                    "product_id": 4743657062444,
                    "position": 1,
                    "created_at": "2020-03-17T13:01:27+05:30",
                    "updated_at": "2020-03-17T13:01:27+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/600_RJ3.jpg?v=1584430287",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/14926992703532"
                }
            ],
            "image": {
                "id": 14926992703532,
                "product_id": 4743657062444,
                "position": 1,
                "created_at": "2020-03-17T13:01:27+05:30",
                "updated_at": "2020-03-17T13:01:27+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/600_RJ3.jpg?v=1584430287",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/14926992703532"
            }
        },
        {
            "id": 4738549710892,
            "title": "RJ - Rex Jemi-2 | RJ-Rex Jemi web series ",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>25 Mins</li>\n<li>18+</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<div class=\"info\">\n<p>Actors: <strong></strong>Rakesh, pavi</p>\n<p>Directors: S.M.Mohammed Azarudeen</p>\n<p>Year of Release: 2020</p>\n<p>Rex is a romantic, sexy and attitude filled guy. He is a dancer in professional. Jemi- A rich girl .  Jemi is a fan follower of Rex's dance and followed him continuously. Rex wanted to have sex with her and he wanted to grab her money. Soon both fall in love and started dating. They both had sex many times and started enjoying as lovers. Whenever they had a fight, Jemi used to gift him. So for expensive gifts, Rex started fighting with her often. In a fight Jemi tells about her ex-lover and engagement made with him. so Jemi ended the fight with break up. Rex got fed up and he don't want the marriage to happen but couldn't stop it. After 4 months he realised his mistakes and concentrated in his dance profession to achieve his aim. He wanted to meet Jemi and they met, they again stick to each other. Rex wants to give all the happiness to Jemi before her marriage with her ex-lover. Finally Rex left Jemi- making her fulfilled in their love...        RexJemi</p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-16T19:01:56+05:30",
            "handle": "rj-rex-jemi-2",
            "updated_at": "2020-05-12T11:18:45+05:30",
            "published_at": "2020-03-16T19:01:56+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "hindi, telugu",
            "admin_graphql_api_id": "gid://shopify/Product/4738549710892",
            "variants": [
                {
                    "id": 32884336721964,
                    "product_id": 4738549710892,
                    "title": "Default Title",
                    "price": "0.00",
                    "sku": "399370772",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-16T19:01:56+05:30",
                    "updated_at": "2020-04-30T15:32:48+05:30",
                    "taxable": true,
                    "barcode": "rsisl10lHbA",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34688400064556,
                    "inventory_quantity": 1,
                    "old_inventory_quantity": 1,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/32884336721964"
                }
            ],
            "options": [
                {
                    "id": 6136184766508,
                    "product_id": 4738549710892,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 14927010725932,
                    "product_id": 4738549710892,
                    "position": 1,
                    "created_at": "2020-03-17T13:02:18+05:30",
                    "updated_at": "2020-03-17T13:02:18+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/RJ_2_Side.jpg?v=1584430338",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/14927010725932"
                }
            ],
            "image": {
                "id": 14927010725932,
                "product_id": 4738549710892,
                "position": 1,
                "created_at": "2020-03-17T13:02:18+05:30",
                "updated_at": "2020-03-17T13:02:18+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/RJ_2_Side.jpg?v=1584430338",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/14927010725932"
            }
        },
        {
            "id": 4749887471660,
            "title": "RJ - Rex Jemi-2.1 | RJ-Rex Jemi web series ",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>25 Mins</li>\n<li>18+</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<div class=\"info\">\n<p>Actors: <strong></strong>Rakesh, Pavi</p>\n<p>Directors: S.M.Mohammed Azarudeen</p>\n<p>Year of Release: 2020</p>\n<p>Rex is a romantic, sexy and attitude filled guy. He is a dancer in professional. Jemi- A rich girl .  Jemi is a fan follower of Rex's dance and followed him continuously. Rex wanted to have sex with her and he wanted to grab her money. Soon both fall in love and started dating. They both had sex many times and started enjoying as lovers. Whenever they had a fight, Jemi used to gift him. So for expensive gifts, Rex started fighting with her often. In a fight Jemi tells about her ex-lover and engagement made with him. so Jemi ended the fight with break up. Rex got fed up and he don't want the marriage to happen but couldn't stop it. After 4 months he realised his mistakes and concentrated in his dance profession to achieve his aim. He wanted to meet Jemi and they met, they again stick to each other. Rex wants to give all the happiness to Jemi before her marriage with her ex-lover. Finally Rex left Jemi- making her fulfilled in their love...        RexJemi</p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-18T15:54:44+05:30",
            "handle": "rj-rex-jemi-2-1",
            "updated_at": "2020-05-12T11:18:46+05:30",
            "published_at": "2020-03-18T15:54:44+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "hindi, telugu",
            "admin_graphql_api_id": "gid://shopify/Product/4749887471660",
            "variants": [
                {
                    "id": 32928073449516,
                    "product_id": 4749887471660,
                    "title": "Default Title",
                    "price": "0.00",
                    "sku": "",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-18T15:54:44+05:30",
                    "updated_at": "2020-04-30T15:33:09+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34734671069228,
                    "inventory_quantity": 1,
                    "old_inventory_quantity": 1,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/32928073449516"
                }
            ],
            "options": [
                {
                    "id": 6149596282924,
                    "product_id": 4749887471660,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 14957807960108,
                    "product_id": 4749887471660,
                    "position": 1,
                    "created_at": "2020-03-18T15:56:29+05:30",
                    "updated_at": "2020-03-18T15:56:29+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/RJ_800_600.jpg?v=1584527189",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/14957807960108"
                }
            ],
            "image": {
                "id": 14957807960108,
                "product_id": 4749887471660,
                "position": 1,
                "created_at": "2020-03-18T15:56:29+05:30",
                "updated_at": "2020-03-18T15:56:29+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/RJ_800_600.jpg?v=1584527189",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/14957807960108"
            }
        },
        {
            "id": 4737886847020,
            "title": "Siddhu | Tamil web series",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>34 Mins</li>\n<li>18+</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<h5 class=\"description-heading\">Siddhu</h5>\n<div class=\"info\">\n<p>Actors: Ankita Dave, Dhara Parikh, Bharath Kumar, Mervin, S.M.Mohameed Azarudeen</p>\n<p>Director: S.M. Mohammed Azarudeen.</p>\n<p>Year of Release: 2020</p>\n<p>Siddhu is village guy and he is in-charge of a resort in ECR-Chennai. He always takes good care and keeps his customers happy at lowest price. Two couples(Mervin-Ankita, Dhara-Aadhi) started their weekend fun trip to ECR but got stuck in road as they couldn't reach the booked resort in-charge on phone.</p>\n<p>They came to siddhu's resort for stay. they had fun, enjoyed, romance. They started teasing siddhu by his appearance and body language, which made siddhu feel sad and angry. Siddhu wants to show them-what he is? who he is?</p>\n<p>The rest of the story is about the transformation to siddhu to \"SIDDHARTH\"-          Psycho thriller</p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-16T17:22:51+05:30",
            "handle": "siddhu",
            "updated_at": "2020-05-12T11:18:45+05:30",
            "published_at": "2020-03-20T21:04:00+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "tamil",
            "admin_graphql_api_id": "gid://shopify/Product/4737886847020",
            "variants": [
                {
                    "id": 32882956468268,
                    "product_id": 4737886847020,
                    "title": "Default Title",
                    "price": "0.00",
                    "sku": "397903060",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-16T17:22:51+05:30",
                    "updated_at": "2020-04-03T08:32:36+05:30",
                    "taxable": true,
                    "barcode": "PylsNoeNRPc",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34686933794860,
                    "inventory_quantity": 0,
                    "old_inventory_quantity": 0,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/32882956468268"
                }
            ],
            "options": [
                {
                    "id": 6135457546284,
                    "product_id": 4737886847020,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 14927081734188,
                    "product_id": 4737886847020,
                    "position": 1,
                    "created_at": "2020-03-17T13:05:43+05:30",
                    "updated_at": "2020-03-17T13:05:43+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/thumb_1583661643siddhu-thumb.jpg?v=1584430543",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/14927081734188"
                }
            ],
            "image": {
                "id": 14927081734188,
                "product_id": 4737886847020,
                "position": 1,
                "created_at": "2020-03-17T13:05:43+05:30",
                "updated_at": "2020-03-17T13:05:43+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/thumb_1583661643siddhu-thumb.jpg?v=1584430543",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/14927081734188"
            }
        },
        {
            "id": 4738222293036,
            "title": "Six Triangles | Tamil web series",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>26 Mins</li>\n<li>18+</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<div class=\"info\">\n<p>Actors: Bharath Kumar, Shakthivel.R, Sukanya, Shivakumar Raji, Jamuna, Masilamani.</p>\n<p>Director: S.M. Mohammed Azarudeen </p>\n<p>Year of Release: 2020</p>\n<p>Ricky was working in abroad. He came to india for his dad's death and he stayed permanently to take care of his mom. But in few months his mother also died. So he felt bad and stressful. Later he felt that his house was haunted and he seek his uncle, a psychiatrist. Uncle referred him to a guy named Azar. </p>\n<p>Did Azar helped Ricky? or got stuck? <br></p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-16T18:18:17+05:30",
            "handle": "six-triangles",
            "updated_at": "2020-05-12T11:18:45+05:30",
            "published_at": "2020-03-20T21:05:01+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "tamil",
            "admin_graphql_api_id": "gid://shopify/Product/4738222293036",
            "variants": [
                {
                    "id": 32883721338924,
                    "product_id": 4738222293036,
                    "title": "Default Title",
                    "price": "0.00",
                    "sku": "398515338",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-16T18:18:17+05:30",
                    "updated_at": "2020-03-23T18:13:32+05:30",
                    "taxable": true,
                    "barcode": "aPIFviJ4q-o",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34687742672940,
                    "inventory_quantity": 1,
                    "old_inventory_quantity": 1,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/32883721338924"
                }
            ],
            "options": [
                {
                    "id": 6135836475436,
                    "product_id": 4738222293036,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 14954728030252,
                    "product_id": 4738222293036,
                    "position": 1,
                    "created_at": "2020-03-18T13:41:44+05:30",
                    "updated_at": "2020-03-18T13:41:44+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Six-Triangles.jpg?v=1584519104",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/14954728030252"
                }
            ],
            "image": {
                "id": 14954728030252,
                "product_id": 4738222293036,
                "position": 1,
                "created_at": "2020-03-18T13:41:44+05:30",
                "updated_at": "2020-03-18T13:41:44+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Six-Triangles.jpg?v=1584519104",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/14954728030252"
            }
        },
        {
            "id": 4743656505388,
            "title": "Virgin Days - Part 1 | Tamil web series - Part 1",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>18 Mins</li>\n<li>18+</li>\n<li>Adult Comedy</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<p><br></p>\n<div class=\"info\">\n<p>Actors: Bharath kumar, R. Karthick, Karthik, Haritha, Sabana</p>\n<p>Director: S.M. Mohammed Azarudeen </p>\n<p>Year of Release: 2020</p>\n<p>The story is about a good guy Bharath. He was committed with a girl since three months. He was sincere with his love and maintained distance without touch which made her feel bored and they got break up.</p>\n<p>After break up, Bharath got fed up and decided to become a playboy. He seeks help with his friends Karthik and Amar. Thus the story travels with their sexual experiences, struggles, fun, suffering entertainment and so on.<br></p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-17T12:59:21+05:30",
            "handle": "virgin-days-part-2",
            "updated_at": "2020-05-12T11:18:46+05:30",
            "published_at": "2020-03-20T20:45:03+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "tamil",
            "admin_graphql_api_id": "gid://shopify/Product/4743656505388",
            "variants": [
                {
                    "id": 32901930549292,
                    "product_id": 4743656505388,
                    "title": "Default Title",
                    "price": "0.00",
                    "sku": "396643537",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-17T12:59:21+05:30",
                    "updated_at": "2020-04-03T16:13:01+05:30",
                    "taxable": true,
                    "barcode": "pxj4uskB51g",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34707048824876,
                    "inventory_quantity": 1,
                    "old_inventory_quantity": 1,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/32901930549292"
                }
            ],
            "options": [
                {
                    "id": 6142071144492,
                    "product_id": 4743656505388,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 15008194625580,
                    "product_id": 4743656505388,
                    "position": 1,
                    "created_at": "2020-03-20T20:26:50+05:30",
                    "updated_at": "2020-03-20T20:26:50+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/VDPoster_Mask_600.jpg?v=1584716210",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/15008194625580"
                }
            ],
            "image": {
                "id": 15008194625580,
                "product_id": 4743656505388,
                "position": 1,
                "created_at": "2020-03-20T20:26:50+05:30",
                "updated_at": "2020-03-20T20:26:50+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/VDPoster_Mask_600.jpg?v=1584716210",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/15008194625580"
            }
        },
        {
            "id": 4743655424044,
            "title": "Virgin Days - Part 2 | Tamil web series - Part 2",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>19 Mins</li>\n<li>18+</li>\n<li>Adult Comedy</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<p><br></p>\n<div class=\"info\">\n<p>Actors: Pavithra Kotian, Bharath kumar, R. Shakthivel. R. Karthick</p>\n<p>Directors: S.M. Mohammed Azarudeen</p>\n<p>Year of Release: 2020</p>\n<p>The story is about a good guy Bharath. He was committed with a girl since three months. He was sincere with his love and maintained distance without touch which made her feel bored and they got break up.</p>\n<p>After break up, Bharath got fed up and decided to become a playboy. He seeks help with his friends Karthik and Amar. Thus the story travels with their sexual experiences, struggles, fun, suffering entertainment and so on.</p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-17T12:59:01+05:30",
            "handle": "virgin-days-part-3",
            "updated_at": "2020-05-12T11:18:45+05:30",
            "published_at": "2020-03-20T20:53:08+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "tamil",
            "admin_graphql_api_id": "gid://shopify/Product/4743655424044",
            "variants": [
                {
                    "id": 32901927239724,
                    "product_id": 4743655424044,
                    "title": "Default Title",
                    "price": "0.00",
                    "sku": "396683137",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-17T12:59:02+05:30",
                    "updated_at": "2020-04-02T21:08:46+05:30",
                    "taxable": true,
                    "barcode": "NLWBWw21vj0",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34707043156012,
                    "inventory_quantity": 8,
                    "old_inventory_quantity": 8,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/32901927239724"
                }
            ],
            "options": [
                {
                    "id": 6142069833772,
                    "product_id": 4743655424044,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 14954184572972,
                    "product_id": 4743655424044,
                    "position": 1,
                    "created_at": "2020-03-18T13:18:58+05:30",
                    "updated_at": "2020-03-18T13:18:58+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Virgin-Days-Part2.jpg?v=1584517738",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/14954184572972"
                }
            ],
            "image": {
                "id": 14954184572972,
                "product_id": 4743655424044,
                "position": 1,
                "created_at": "2020-03-18T13:18:58+05:30",
                "updated_at": "2020-03-18T13:18:58+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Virgin-Days-Part2.jpg?v=1584517738",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/14954184572972"
            }
        },
        {
            "id": 4773192335404,
            "title": "Virgin Days - Part 2 | Telugu web series - Part 2",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>19 Mins</li>\n<li>18+</li>\n<li>Adult Comedy</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<p><br></p>\n<div class=\"info\">\n<p>Actors: Pavithra Kotian, Bharath kumar, R. Shakthivel. R. Karthick</p>\n<p>Directors: S.M. Mohammed Azarudeen</p>\n<p>Year of Release: 2020</p>\n<p>The story is about a good guy Bharath. He was committed with a girl since three months. He was sincere with his love and maintained distance without touch which made her feel bored and they got break up.</p>\n<p>After break up, Bharath got fed up and decided to become a playboy. He seeks help with his friends Karthik and Amar. Thus the story travels with their sexual experiences, struggles, fun, suffering entertainment and so on.</p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-23T18:17:52+05:30",
            "handle": "virgin-days-part-2-telugu-web-series-part-2",
            "updated_at": "2020-05-12T11:18:46+05:30",
            "published_at": "2020-03-23T18:17:52+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "telugu",
            "admin_graphql_api_id": "gid://shopify/Product/4773192335404",
            "variants": [
                {
                    "id": 33022508073004,
                    "product_id": 4773192335404,
                    "title": "Default Title",
                    "price": "0.00",
                    "sku": "399371198",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-23T18:17:52+05:30",
                    "updated_at": "2020-03-23T18:19:51+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34835718930476,
                    "inventory_quantity": 10,
                    "old_inventory_quantity": 10,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/33022508073004"
                }
            ],
            "options": [
                {
                    "id": 6180460789804,
                    "product_id": 4773192335404,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 15063962845228,
                    "product_id": 4773192335404,
                    "position": 1,
                    "created_at": "2020-03-23T18:17:52+05:30",
                    "updated_at": "2020-03-23T18:17:53+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Virgin-Days-Part2_05191733-a293-4c02-bd24-16d27f0a9f1e.jpg?v=1584967673",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/15063962845228"
                }
            ],
            "image": {
                "id": 15063962845228,
                "product_id": 4773192335404,
                "position": 1,
                "created_at": "2020-03-23T18:17:52+05:30",
                "updated_at": "2020-03-23T18:17:53+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Virgin-Days-Part2_05191733-a293-4c02-bd24-16d27f0a9f1e.jpg?v=1584967673",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/15063962845228"
            }
        },
        {
            "id": 4737885700140,
            "title": "Virgin Days - Part 3  | Tamil web series - Part 3",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>23 Mins</li>\n<li>18+</li>\n<li>Adult Comedy</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<div class=\"info\">\n<p>Actors: Ankita Dave, Pavi, Aruna, Bharath kumar, Shakthivel. R, R. Karthick, Mervin, Durai</p>\n<p>Directors: S.M. Mohemmed Azarudeen</p>\n<p>Year of Release: 2020</p>\n<p>The story is about a good guy Bharath. He was committed with a girl since three months. He was sincere with his love and maintained distance without touch which made her feel bored and they got break up.</p>\n<p>After break up, Bharath got fed up and decided to become a playboy. He seeks help with his friends Karthick and Amar. Thus the story travels with their sexual experiences, struggles, fun, suffering entertainment and so on.</p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-16T17:22:40+05:30",
            "handle": "virgin-days-part-4",
            "updated_at": "2020-05-12T11:18:45+05:30",
            "published_at": "2020-03-20T21:08:00+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "tamil",
            "admin_graphql_api_id": "gid://shopify/Product/4737885700140",
            "variants": [
                {
                    "id": 32882951389228,
                    "product_id": 4737885700140,
                    "title": "Default Title",
                    "price": "0.00",
                    "sku": "396692412",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-16T17:22:40+05:30",
                    "updated_at": "2020-04-30T15:33:31+05:30",
                    "taxable": true,
                    "barcode": "yeABqx0OJww",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34686932090924,
                    "inventory_quantity": 6,
                    "old_inventory_quantity": 6,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/32882951389228"
                }
            ],
            "options": [
                {
                    "id": 6135456366636,
                    "product_id": 4737885700140,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 14954436558892,
                    "product_id": 4737885700140,
                    "position": 1,
                    "created_at": "2020-03-18T13:30:03+05:30",
                    "updated_at": "2020-03-18T13:30:03+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Virgin-Days-Part3_b75765a9-225c-41a6-9a9f-b913805de348.jpg?v=1584518403",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/14954436558892"
                }
            ],
            "image": {
                "id": 14954436558892,
                "product_id": 4737885700140,
                "position": 1,
                "created_at": "2020-03-18T13:30:03+05:30",
                "updated_at": "2020-03-18T13:30:03+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Virgin-Days-Part3_b75765a9-225c-41a6-9a9f-b913805de348.jpg?v=1584518403",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/14954436558892"
            }
        },
        {
            "id": 4738221834284,
            "title": "Virgin Days - Part 4  | Tamil web series - Part 4",
            "body_html": "<div class=\"imdb-ratings-block\">\n<ul>\n<li>2020</li>\n<li>24 Mins</li>\n<li>18+</li>\n<li>Adult comedy</li>\n<li>IMDB 5</li>\n<li>CC</li>\n<li>English</li>\n</ul>\n</div>\n<div class=\"info\">\n<p>Actors: Bharath Kumar, R. Karthik, Durai, Shakthivel. R, Aashika, Keerthana</p>\n<p>Directors: S.M. Mohammed Azarudeen</p>\n<p>Year of Release: 2020</p>\n<p>The story is about a good guy Bharath. He was committed with a girl since three months. He was sincere with his love and maintained distance without touch which made her feel bored and they got break up.</p>\n<p>After break up, Bharath got fed up and decided to become a playboy. He seeks help with his friends Karthick and Amar. Thus the story travels with their sexual experiences, struggles, fun, suffering entertainment and so on.</p>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "web series",
            "created_at": "2020-03-16T18:18:10+05:30",
            "handle": "virgin-days",
            "updated_at": "2020-05-12T11:18:45+05:30",
            "published_at": "2020-03-20T21:08:00+05:30",
            "template_suffix": "",
            "published_scope": "web",
            "tags": "tamil",
            "admin_graphql_api_id": "gid://shopify/Product/4738221834284",
            "variants": [
                {
                    "id": 32883720683564,
                    "product_id": 4738221834284,
                    "title": "Default Title",
                    "price": "50.00",
                    "sku": "396693844",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-16T18:18:10+05:30",
                    "updated_at": "2020-04-03T16:15:57+05:30",
                    "taxable": true,
                    "barcode": "PJdUGeKrR8k",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34687741853740,
                    "inventory_quantity": 0,
                    "old_inventory_quantity": 0,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/32883720683564"
                }
            ],
            "options": [
                {
                    "id": 6135835951148,
                    "product_id": 4738221834284,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 14954606329900,
                    "product_id": 4738221834284,
                    "position": 1,
                    "created_at": "2020-03-18T13:36:35+05:30",
                    "updated_at": "2020-03-18T18:49:12+05:30",
                    "alt": null,
                    "width": 600,
                    "height": 600,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Virgin-Days-Part4.jpg?v=1584537552",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/14954606329900"
                }
            ],
            "image": {
                "id": 14954606329900,
                "product_id": 4738221834284,
                "position": 1,
                "created_at": "2020-03-18T13:36:35+05:30",
                "updated_at": "2020-03-18T18:49:12+05:30",
                "alt": null,
                "width": 600,
                "height": 600,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/Virgin-Days-Part4.jpg?v=1584537552",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/14954606329900"
            }
        },
        {
            "id": 4804024303660,
            "title": "Yearly membership",
            "body_html": "<div class=\"prodcut-content\" style=\"text-align: left;\">\n<div class=\"prodcut_month\">\n<h1>499</h1>\n<span>49.83 MONTHLY</span>\n</div>\n<ul>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Min duration 1 year</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Watch on your laptop, TV, phone and tablet 1 year</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Full HD and 4K available 1 year</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Unlimited movies and Web series 1 month</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>24/7 Tech Support 1 year</li>\n<li>\n<i class=\"fa fa-check\" aria-hidden=\"true\"></i>Cancel anytime 1 year</li>\n<li>VISA DEBIT CARD ACCEPTED IN PAYMENT GATEWAY</li>\n</ul>\n</div>",
            "vendor": "jolluvideos",
            "product_type": "",
            "created_at": "2020-03-26T18:06:49+05:30",
            "handle": "yearly-membership",
            "updated_at": "2020-05-12T12:10:49+05:30",
            "published_at": "2020-03-26T18:06:49+05:30",
            "template_suffix": "subscription",
            "published_scope": "web",
            "tags": "",
            "admin_graphql_api_id": "gid://shopify/Product/4804024303660",
            "variants": [
                {
                    "id": 33118735990828,
                    "product_id": 4804024303660,
                    "title": "Default Title",
                    "price": "499.00",
                    "sku": "",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": null,
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-26T18:06:49+05:30",
                    "updated_at": "2020-05-10T17:36:46+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 34936624939052,
                    "inventory_quantity": 2,
                    "old_inventory_quantity": 2,
                    "requires_shipping": false,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/33118735990828"
                }
            ],
            "options": [
                {
                    "id": 6214739329068,
                    "product_id": 4804024303660,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [
                {
                    "id": 15360339738668,
                    "product_id": 4804024303660,
                    "position": 1,
                    "created_at": "2020-04-02T12:34:06+05:30",
                    "updated_at": "2020-04-02T12:34:06+05:30",
                    "alt": null,
                    "width": 1280,
                    "height": 794,
                    "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/new-menbership_65b137f1-d35e-4808-bd1d-8cc2597e9cc1.png?v=1585811046",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/15360339738668"
                }
            ],
            "image": {
                "id": 15360339738668,
                "product_id": 4804024303660,
                "position": 1,
                "created_at": "2020-04-02T12:34:06+05:30",
                "updated_at": "2020-04-02T12:34:06+05:30",
                "alt": null,
                "width": 1280,
                "height": 794,
                "src": "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/new-menbership_65b137f1-d35e-4808-bd1d-8cc2597e9cc1.png?v=1585811046",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/15360339738668"
            }
        },
        {
            "id": 4861269966892,
            "title": "Yearly membership Auto renew",
            "body_html": "WARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.",
            "vendor": "jolluvideos",
            "product_type": "",
            "created_at": "2020-03-31T17:33:46+05:30",
            "handle": "yearly-membership-1",
            "updated_at": "2020-05-12T11:18:46+05:30",
            "published_at": null,
            "template_suffix": "",
            "published_scope": "web",
            "tags": "Subscription",
            "admin_graphql_api_id": "gid://shopify/Product/4861269966892",
            "variants": [
                {
                    "id": 33263049605164,
                    "product_id": 4861269966892,
                    "title": "Default Title",
                    "price": "499.00",
                    "sku": "",
                    "position": 1,
                    "inventory_policy": "continue",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": null,
                    "option1": "Default Title",
                    "option2": null,
                    "option3": null,
                    "created_at": "2020-03-31T17:33:46+05:30",
                    "updated_at": "2020-03-31T17:33:46+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 35090890653740,
                    "inventory_quantity": 2,
                    "old_inventory_quantity": 2,
                    "requires_shipping": false,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/33263049605164"
                }
            ],
            "options": [
                {
                    "id": 6277894537260,
                    "product_id": 4861269966892,
                    "name": "Title",
                    "position": 1,
                    "values": [
                        "Default Title"
                    ]
                }
            ],
            "images": [],
            "image": null
        }
    ]

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    }, {
        id: '4',
        title: 'First Item',
    },
    {
        id: '5',
        title: 'Second Item',
    },
    {
        id: '6',
        title: 'Third Item',
    },
];
var FilterData=[];
 var FirstAarry=[];
    var SecondAarry=[];
    var TamilImageArray = [];
    var TelguImageArray = [];
    var HindiImageArray = [];
     var TamilArray = [];
    var TelguArray = [];
    var HindiArray = [];
class HomePage extends Component {
    static navigationOptions = {
    header: null
  };

    constructor(props) {
        super(props);
        this.state = {
           images: [
                "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/600_RJ3.jpg?v=1584430287",
                "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/RJ_2_Side.jpg?v=1584430338",
              "https://cdn.shopify.com/s/files/1/0347/2837/8412/products/RJ_800_600.jpg?v=1584527189",
"https://cdn.shopify.com/s/files/1/0347/2837/8412/products/thumb_1583661643siddhu-thumb.jpg?v=1584430543",
            ],
            Images1:require('../../Assets/Images/image1.jpg'),
            Images2:require('../../Assets/Images/image2.jpg'),
            Images3:require('../../Assets/Images/image3.jpg'),

        };
    }
componentDidMount(){
products.map(item => {
if(item.title == 'Quarterly membership' || item.title=='membership Auto renew' || item.title == 'membership' || item.title == 'Yearly membership Auto renew' || item.title == 'Yearly membership'){
}else{
    if(item.tags == 'tamil'){
 TamilArray.push(item);
    }else if(item.title == 'telugu'){
         TelguArray.push(item);
    }else if(item.title  == 'hindi'){
        HindiArray.push(item);
    }else if(item.tags == 'hindi, tamil, telugu'){
        TamilArray.push(item);
        HindiArray.push(item);
        TelguArray.push(item);
    }else if(item.tags == 'hindi, telugu'){
         HindiArray.push(item);
        TelguArray.push(item);
    }else{
   
}
}
})
TamilArray.map(item=>{
    if(item.image == null){
    }else{
   TamilImageArray.push(item.image)
    }
})
TelguArray.map(item=>{
    if(item.image == null){
    }else{
   TelguImageArray.push(item.image)
    }
})
HindiArray.map(item=>{
    if(item.image == null){
    }else{
   HindiImageArray.push(item.image)
    }
})
}

loginpage=()=>{
    this.props.navigation.navigate('LoginPage')
}

    render() {
        return (
             <ScrollView style={{flex:1 , backgroundColor: Colors.primary,}}> 
            <View style={styles.container}>
            
              <HeaderView onPress= {this.loginpage} />   
                 
                    <View style={{ width: '99%', height: '34%', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <SliderBox
                     images={this.state.images}
                            //sliderBoxHeight={'100%'}
                            dotColor="#3386FF"
                            inactiveDotColor="#fff"
                            //paginationBoxVerticalPadding={20}
                            autoplay={true}
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                padding: 0,
                                margin: 0,
                                backgroundColor: "rgba(128, 128, 128, 0.92)"
                            }}
                            ImageComponentStyle={{ width: '100%',height:'100%',justifyContent:'center' }}
                            imageLoadingColor="#3386FF"
                           // borderRadius={10}

                    />
                    </View>
                    <View style={{ padding: 10 }}>
                        <TouchableOpacity
                                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                                onPress={() => this.props.navigation.navigate('CategoryName',{
                                ArrayData:TamilImageArray,
                                Type:'Featured Web Series - Tamil',
                        })}>
                        <Text style={[styles.text, { fontWeight: 'bold', marginVertical: 10 }]}>Featured Web Series - Tamil</Text>
                        </TouchableOpacity>
                        <FlatList
                        data={TamilImageArray}
                        horizontal={true}
                         contentContainerStyle={{ paddingBottom: 10}}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                        <TouchableOpacity
                                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                                onPress={() => this.props.navigation.navigate('HomeDetails',{
                                ImageArray:item.src,
                                FullyArray:TamilArray,
                        })}>

                        <View style={{padding:4}}>
                        <Image style={{ height: 160, width: 160, marginRight:4 }}
                        source = {{ uri: item.src }}
                        />
                        </View>
                        </TouchableOpacity>
                        }>
                        </FlatList>
<TouchableOpacity
                                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                                onPress={() => this.props.navigation.navigate('CategoryName',{
                                ArrayData:TelguImageArray,
                                Type:'Featured Web Series - Telgu',
                        })}>
                        <Text style={[styles.text, { fontWeight: 'bold', marginVertical: 10 }]}>Featured Web Series - Telgu</Text>
                        </TouchableOpacity>
                        <FlatList
                        data={TelguImageArray}
                        horizontal={true}
                         contentContainerStyle={{ paddingBottom: 10}}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                        <TouchableOpacity
                                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                                onPress={() => this.props.navigation.navigate('HomeDetails',{
                                ImageArray:item.src,
                                FullyArray:TelguArray,
                        })}>

                        <View style={{padding:4}}>
                        <Image style={{ height: 160, width: 160, marginRight:4 }}
                        source = {{ uri: item.src }}
                        />
                        </View>
                        </TouchableOpacity>
                        }>
                        </FlatList>

                        <TouchableOpacity
                        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                        onPress={() => this.props.navigation.navigate('CategoryName',{
                        ArrayData:HindiImageArray,
                        Type:'Featured Web Series - Hindi',
                        })}>
                        <Text style={[styles.text, { fontWeight: 'bold', marginVertical: 10 }]}>Featured Web Series - Hindi</Text>
                        </TouchableOpacity>
                        <FlatList
                        data={HindiImageArray}
                         contentContainerStyle={{ paddingBottom: 10}}
                        horizontal={true}
                        //index={5}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                        <TouchableOpacity
                                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                               onPress={() => this.props.navigation.navigate('HomeDetails',{
                               ImageArray:item.src,
                               FullyArray:HindiArray,
                        })}>
                        <View style={{padding:4}}>
                        <Image style={{ height: 160, width: 160, marginRight:4 }}
                        source = {{ uri: item.src }}
                        />
                        </View>
                        </TouchableOpacity>
                        }>
                        </FlatList>
     </View>

              
               
                <StatusBar/>
     
            </View>
             
  </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       // width:'100%',
       marginBottom:250,
        backgroundColor: Colors.primary,
 //justifyContent:'center',
        //alignItems:'center',
    },
    text: {
        fontSize: 15,
        color: Colors.fontColor,
        padding:6
    },
});

export default HomePage;