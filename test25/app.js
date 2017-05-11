const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
	var htmlToArticleJson = require('html-to-article-json')();
	var htmlString = `
<dl class="list">
    <dd><dl class="list">
        <dt>猜你喜欢</dt>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/40987438"

                    data-stid="832495004676186112_c0_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="40987438">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/3a6c1851cc25c1b2563b7b69c37008fd80620.jpg@118_0_470_470a%7C267h_267w_2e_90Q" data-src-high="//p1.meituan.net/200.0/deal/3a6c1851cc25c1b2563b7b69c37008fd80620.jpg@118_0_470_470a%7C267h_267w_2e_90Q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">冯记招牌水煮鱼</div>

        <div class="title text-block">[中南路/洪山广场]套餐4选1，包间免费</div>
        <div class="price">
            <span class="strong">13.5</span><span class="strong-color">元</span>
                <del>16元</del>
	            <span class="line-right">
	                    已售25517
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/32772472"

                    data-stid="832495025735626752_c1_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="32772472">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/a2580bf58e75c31c75fae38c4e5ccac246132.jpg" data-src-high="//p1.meituan.net/200.0/deal/a2580bf58e75c31c75fae38c4e5ccac246132.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">渔港烤鱼</div>

        <div class="title text-block">[纸坊]草鱼套餐，建议3-4人使用</div>
        <div class="price">
            <span class="strong">99</span><span class="strong-color">元</span>
                <del>134元</del>
	            <span class="line-right">
	                    已售23882
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/29572701"

                    data-stid="832495297308418048_c2_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="29572701">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/a7a7cd4b63d3fa870740362c8269ee73140794.jpg" data-src-high="//p1.meituan.net/200.0/deal/a7a7cd4b63d3fa870740362c8269ee73140794.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">川行天下</div>

        <div class="title text-block">[武汉等]100元代金券1张，可叠加2张</div>
        <div class="price">
            <span class="strong">87</span><span class="strong-color">元</span>
                <del>100元</del>
	            <span class="line-right">
	                    已售33599
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/34907159"

                    data-stid="832495025735626752_c3_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="34907159">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/__21357995__7607600.jpg" data-src-high="//p1.meituan.net/200.0/deal/__21357995__7607600.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">玉林串串香</div>

        <div class="title text-block">[纸坊]50元代金券1张，可叠加3张</div>
        <div class="price">
            <span class="strong">42</span><span class="strong-color">元</span>
                <del>50元</del>
	            <span class="line-right">
	                    已售11687
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/29072625"

                    data-stid="832495025588887552_c4_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="29072625">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/65603775413d1fa47c648f18d742ebe344008.jpg" data-src-high="//p1.meituan.net/200.0/deal/65603775413d1fa47c648f18d742ebe344008.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">大长今韩式自助烤肉</div>

        <div class="title text-block">[纸坊]自助晚餐烤肉</div>
        <div class="price">
            <span class="strong">55.9</span><span class="strong-color">元</span>
                <del>59元</del>
	            <span class="line-right">
	                    已售62198
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/27628293"

                    data-stid="832500459431268352_c5_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="27628293">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/dd83413b1448373a82d4976ed0f7d4db30948.jpg@100_0_304_304a%7C267h_267w_2e_90Q" data-src-high="//p1.meituan.net/200.0/deal/dd83413b1448373a82d4976ed0f7d4db30948.jpg@100_0_304_304a%7C267h_267w_2e_90Q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">金韩宫韩国烧烤</div>

        <div class="title text-block">[纸坊]100元代金券1张，可叠加</div>
        <div class="price">
            <span class="strong">88</span><span class="strong-color">元</span>
                <del>100元</del>
	            <span class="line-right">
	                    已售18963
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/35761384"

                    data-stid="832495004676186112_c6_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="35761384">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/63ca52a0d3d23d713df0a0ecb96e822135949.jpg@120_0_400_400a%7C267h_267w_2e_100q" data-src-high="//p1.meituan.net/200.0/deal/63ca52a0d3d23d713df0a0ecb96e822135949.jpg@120_0_400_400a%7C267h_267w_2e_100q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">华莱士</div>

        <div class="title text-block">[武汉等]单人超值汉堡套餐，包间免费</div>
        <div class="price">
            <span class="strong">14.9</span><span class="strong-color">元</span>
                <del>28.5元</del>
	            <span class="line-right">
	                    已售349791
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd id="seven">
        		<a href="//meishi.meituan.com/i/deal/33764750"

                    data-stid="832500459431268352_c7_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="33764750">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/890d3495f00ebad7dd3487bb37477e90130666.jpg" data-src-high="//p0.meituan.net/200.0/deal/890d3495f00ebad7dd3487bb37477e90130666.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">皇冠蛋糕</div>

        <div class="title text-block">[武汉等]60元代金券1张，可叠加</div>
        <div class="price">
            <span class="strong">54</span><span class="strong-color">元</span>
                <del>60元</del>
	            <span class="line-right">
	                    已售28842
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/5382660"

                    data-stid="832495025735626752_c8_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="5382660">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/14eb2c0a6bda763b796804e41207255876745.jpg" data-src-high="//p1.meituan.net/200.0/deal/14eb2c0a6bda763b796804e41207255876745.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">金谷一韩式料理自助餐厅</div>

        <div class="title text-block">[8店通用]烤肉自助晚餐</div>
        <div class="price">
            <span class="strong">63.9</span><span class="strong-color">元</span>
                <del>68元</del>
	            <span class="line-right">
	                    已售353036
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/30480594"

                    data-stid="832495297308418048_c9_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="30480594">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/cb018769d3818f756f75d83bd9737b2f40802.jpg" data-src-high="//p0.meituan.net/200.0/deal/cb018769d3818f756f75d83bd9737b2f40802.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">泰迪厨房</div>

        <div class="title text-block">[武汉等]全新双人套餐，提供免费WiFi</div>
        <div class="price">
            <span class="strong">89.9</span><span class="strong-color">元</span>
                <del>161元</del>
	            <span class="line-right">
	                    已售38714
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/27193150"

                    data-stid="832495297308418048_c10_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="27193150">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/ae8d7fe645e11a5a92172dd5f977d586112380.jpg@333_0_1167_1167a%7C267h_267w_2e_90Q" data-src-high="//p1.meituan.net/200.0/deal/ae8d7fe645e11a5a92172dd5f977d586112380.jpg@333_0_1167_1167a%7C267h_267w_2e_90Q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">一家亲火锅</div>

        <div class="title text-block">[武汉等]2~3人套餐，提供免费WiFi</div>
        <div class="price">
            <span class="strong">88</span><span class="strong-color">元</span>
                <del>117元</del>
	            <span class="line-right">
	                    已售8359
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/29506390"

                    data-stid="832495297308418048_c11_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="29506390">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/bd394f764cb4552b29d1810bcb95ffe231601.jpg" data-src-high="//p0.meituan.net/200.0/deal/bd394f764cb4552b29d1810bcb95ffe231601.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">品好味鸭血粉丝汤</div>

        <div class="title text-block">[纸坊]鸭血粉丝经典套餐，建议单人使用</div>
        <div class="price">
            <span class="strong">5</span><span class="strong-color">元</span>
                <del>6.5元</del>
	            <span class="line-right">
	                    已售953
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/41541852"

                    data-stid="832495025735626752_c12_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="41541852">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/a1e35e2438d086f169195d1abbe173b51561200.png@293_0_656_656a%7C267h_267w_2e_90Q" data-src-high="//p1.meituan.net/200.0/deal/a1e35e2438d086f169195d1abbe173b51561200.png@293_0_656_656a%7C267h_267w_2e_90Q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">77回旋自助火锅</div>

        <div class="title text-block">[纸坊]单人晚市自助餐</div>
        <div class="price">
            <span class="strong">47.9</span><span class="strong-color">元</span>
                <del>55元</del>
	            <span class="line-right">
	                    已售3888
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/28340231"

                    data-stid="832500459431268352_c13_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="28340231">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/c0547440442d0b051242d8ae9a034020111024.jpg" data-src-high="//p0.meituan.net/200.0/deal/c0547440442d0b051242d8ae9a034020111024.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">紫燕百味鸡</div>

        <div class="title text-block">[148店通用]20元代金券1张，可叠加</div>
        <div class="price">
            <span class="strong">18.8</span><span class="strong-color">元</span>
                <del>20元</del>
	            <span class="line-right">
	                    已售751019
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/44809922"

                    data-stid="832495004676186112_c14_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="44809922">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/6bd3b9abb0c3791ba8e21e6e43479c7315091.jpg@64_0_512_512a%7C267h_267w_2e_100Q" data-src-high="//p0.meituan.net/200.0/deal/6bd3b9abb0c3791ba8e21e6e43479c7315091.jpg@64_0_512_512a%7C267h_267w_2e_100Q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">桃花醉小酒馆</div>

        <div class="title text-block">[13店通用]招牌桃花酒1瓶，包间免费</div>
        <div class="price">
            <span class="strong">5</span><span class="strong-color">元</span>
                <del>12元</del>
	            <span class="line-right">
	                    已售757
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//i.meituan.com/deal/35018074.html"

                    data-stid="832495297308418048_c15_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="35018074">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/dpdeal/44f215eedf4d38b8bb19288b57baa923101811.jpg" data-src-high="//p0.meituan.net/200.0/dpdeal/44f215eedf4d38b8bb19288b57baa923101811.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">中百仓储</div>

        <div class="title text-block">[武汉等]面值卡</div>
        <div class="price">
            <span class="strong">98</span><span class="strong-color">元</span>
                <del>100元</del>
	            <span class="line-right">
	                    已售35762
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/32806765"

                    data-stid="832495004676186112_c16_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="32806765">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/e5d21470df5ef34f92b77d83dd16c771153749.jpg@0_7_368_368a%7C267h_267w_2e_90Q" data-src-high="//p0.meituan.net/200.0/deal/e5d21470df5ef34f92b77d83dd16c771153749.jpg@0_7_368_368a%7C267h_267w_2e_90Q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">正新鸡排</div>

        <div class="title text-block">[全国]【官方】正新鸡排尊享版单人餐</div>
        <div class="price">
            <span class="strong">9.5</span><span class="strong-color">元</span>
                <del>20元</del>
	            <span class="line-right">
	                    已售14901100
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/44774213"

                    data-stid="832495004676186112_c17_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="44774213">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/4f28fc2b1f7f5d93657322a8fc4fe7d3104662.jpg@175_0_450_450a%7C267h_267w_2e_90Q" data-src-high="//p0.meituan.net/200.0/deal/4f28fc2b1f7f5d93657322a8fc4fe7d3104662.jpg@175_0_450_450a%7C267h_267w_2e_90Q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">国际大巴扎</div>

        <div class="title text-block">[武昌区]100元代金券1张，全场通用</div>
        <div class="price">
            <span class="strong">50</span><span class="strong-color">元</span>
                <del>100元</del>
	            <span class="line-right">
	                    已售425
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/30446347"

                    data-stid="832500459431268352_c18_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="30446347">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/11d9119820317e11a24970e15ddb632331667.jpg@120_0_400_400a%7C267h_267w_2e_100Q" data-src-high="//p0.meituan.net/200.0/deal/11d9119820317e11a24970e15ddb632331667.jpg@120_0_400_400a%7C267h_267w_2e_100Q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">仟吉西饼</div>

        <div class="title text-block">[武汉等]仟吉自提款10英寸蛋糕1个，约10英寸，不限</div>
        <div class="price">
            <span class="strong">238.2</span><span class="strong-color">元</span>
                <del>259元</del>
	            <span class="line-right">
	                    已售43739
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/40347137"

                    data-stid="832495004676186112_c19_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="40347137">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/58dd2045c59770df38ff824c776a649148114.jpg@120_0_400_400a%7C267h_267w_2e_100q" data-src-high="//p1.meituan.net/200.0/deal/58dd2045c59770df38ff824c776a649148114.jpg@120_0_400_400a%7C267h_267w_2e_100q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">薄冰羊肉粉</div>

        <div class="title text-block">[徐东大街]小份套餐，建议单人使用，包间免费</div>
        <div class="price">
            <span class="strong">12</span><span class="strong-color">元</span>
                <del>14元</del>
	            <span class="line-right">
	                    已售5888
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/38355601"

                    data-stid="832495004676186112_c20_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="38355601">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/8526baecc6153f567e830d085a16191646292.jpg" data-src-high="//p1.meituan.net/200.0/deal/8526baecc6153f567e830d085a16191646292.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">尊宝比萨</div>

        <div class="title text-block">[33店通用]双人餐，提供免费WiFi</div>
        <div class="price">
            <span class="strong">57</span><span class="strong-color">元</span>
                <del>94元</del>
	            <span class="line-right">
	                    已售30352
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/26752700"

                    data-stid="832495025588887552_c21_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="26752700">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/eee158e54aa7541cffa5f77c67a8282144647.jpg" data-src-high="//p0.meituan.net/200.0/deal/eee158e54aa7541cffa5f77c67a8282144647.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">玛格利塔</div>

        <div class="title text-block">[武汉等]美味披萨3人套餐</div>
        <div class="price">
            <span class="strong">49.9</span><span class="strong-color">元</span>
                <del>76元</del>
	            <span class="line-right">
	                    已售74859
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/29086565"

                    data-stid="838566177688137728_c22_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="29086565">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/f01a2796cfd583cd23b5de1d7329654a48266.jpg" data-src-high="//p0.meituan.net/200.0/deal/f01a2796cfd583cd23b5de1d7329654a48266.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">咖啡陪你</div>

        <div class="title text-block">[徐东大街]饮品6选1，提供免费WiFi</div>
        <div class="price">
            <span class="strong">23.9</span><span class="strong-color">元</span>
                <del>32元</del>
	            <span class="line-right">
	                    已售789
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//i.meituan.com/deal/36732797.html"

                    data-stid="832495004676186112_c23_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="36732797">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/dpdeal/efde480297815e7910efd5915a73f9c2200512.jpg" data-src-high="//p1.meituan.net/200.0/dpdeal/efde480297815e7910efd5915a73f9c2200512.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">美尚美场</div>

        <div class="title text-block">[5店通用]单人高级设计师洗剪吹/造型设计</div>
        <div class="price">
            <span class="strong">29.5</span><span class="strong-color">元</span>
                <span class="tag">品牌新用户减5.1元</span>
	            <span class="line-right">
	                    已售7857
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/29153831"

                    data-stid="838566177688137728_c24_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="29153831">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/75dcdbd3d5a32954a1956e73d31218bc37773.jpg" data-src-high="//p1.meituan.net/200.0/deal/75dcdbd3d5a32954a1956e73d31218bc37773.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">捞旺盛哥锅物料理</div>

        <div class="title text-block">[18店通用]双人套餐，提供免费WiFi</div>
        <div class="price">
            <span class="strong">129.9</span><span class="strong-color">元</span>
                <del>204元</del>
	            <span class="line-right">
	                    已售151119
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//i.meituan.com/deal/35289510.html"

                    data-stid="832495297308418048_c25_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="35289510">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/dpdeal/8e128ba157b759b9484e076ecb80f56f91972.jpg" data-src-high="//p0.meituan.net/200.0/dpdeal/8e128ba157b759b9484e076ecb80f56f91972.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">名仕台球</div>

        <div class="title text-block">[纸坊]名仕台球一小时套餐</div>
        <div class="price">
            <span class="strong">26.9</span><span class="strong-color">元</span>
                <del>40元</del>
	            <span class="line-right">
	                    已售1310
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/28514275"

                    data-stid="832495004676186112_c26_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="28514275">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/9932465c58a0e1d00bc5972a25dd07b230744.jpg" data-src-high="//p1.meituan.net/200.0/deal/9932465c58a0e1d00bc5972a25dd07b230744.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">淮南牛肉汤</div>

        <div class="title text-block">[徐东大街]主食小份2选1，建议单人使用</div>
        <div class="price">
            <span class="strong">10</span><span class="strong-color">元</span>
                <del>12元</del>
	            <span class="line-right">
	                    已售4563
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/27023188"

                    data-stid="838566177688137728_c27_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="27023188">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/dba9c08e02806230a1ca177aa4b89fc245892.jpg" data-src-high="//p1.meituan.net/200.0/deal/dba9c08e02806230a1ca177aa4b89fc245892.jpg" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">三清洞摩西</div>

        <div class="title text-block">[3店通用]双人餐，提供免费WiFi</div>
        <div class="price">
            <span class="strong">86</span><span class="strong-color">元</span>
                <del>120元</del>
	            <span class="line-right">
	                    已售19016
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/36190364"

                    data-stid="838566177688137728_c28_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="36190364">
        <div class="dealcard-img imgbox" data-src="//p1.meituan.net/100.0/deal/947cad6ea89460d0c565155a9d74631363051.jpg@80_0_480_480a%7C267h_267w_2e_100q" data-src-high="//p1.meituan.net/200.0/deal/947cad6ea89460d0c565155a9d74631363051.jpg@80_0_480_480a%7C267h_267w_2e_100q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">肖记公安牛肉鱼杂馆</div>

        <div class="title text-block">[8店通用]100元代金券1张，可叠加</div>
        <div class="price">
            <span class="strong">92</span><span class="strong-color">元</span>
                <del>100元</del>
	            <span class="line-right">
	                    已售18037
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>

        <dd >
        		<a href="//meishi.meituan.com/i/deal/42737229"

                    data-stid="832495004676186112_c29_e59b4e35fb4438f2335ae0083bcadcd34" gaevent="imt/homepage/guess" class="react "

        		>
<div class="dealcard" data-did="42737229">
        <div class="dealcard-img imgbox" data-src="//p0.meituan.net/100.0/deal/5cd54e296fffdee33431e9d4f88141c435603.jpg@153_0_511_511a%7C267h_267w_2e_90Q" data-src-high="//p0.meituan.net/200.0/deal/5cd54e296fffdee33431e9d4f88141c435603.jpg@153_0_511_511a%7C267h_267w_2e_90Q" data-com="unveil" ></div>
    <div class="dealcard-block-right">
                <div class="dealcard-brand single-line">楚香巴土印象</div>

        <div class="title text-block">[汉街]100元代金券1张，可叠加</div>
        <div class="price">
            <span class="strong">92</span><span class="strong-color">元</span>
                <del>100元</del>
	            <span class="line-right">
	                    已售1975
	            </span>
        </div>
    </div>
</div>
			</a>
        </dd>
</dl>
</dd>
    <dd class="db">
        <a class="react "
           href="//i.meituan.com/wuhan"
           data-stid_b="4" gaevent="imt/homepage/allcate">
            <div class="more">查看全部团购</div>
        </a>
    </dd>
</dl>

`
	var articleJson = htmlToArticleJson(htmlString);
	ctx.body = articleJson;
})

app.listen(3500)
