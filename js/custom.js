const imgUrl = "./img/programs/";
$(".tabs-simple a").click(function(e) {
    const data = Programs[$(e.target).attr("id")];
    let html = ``;
    data.forEach((ele, index) => {
        const title = ele.title;
        const content = ele.content;
        html += `<div class="col-lg-5">
        <div
            class="feature-box feature-box-tertiary feature-box-style-5"
        >
            <div class="feature-box-icon">
            <img
            src="${imgUrl}${title}.png"
            class="img-programs"
            alt="" />
            </div>
            <div class="feature-box-info">
                <h4 class="mb-2">
                    ${title}
                </h4>
                <p class="mb-4">
                   ${content}
                </p>
            </div>
        </div>
    </div>`;
        if (index % 2 == 0) {
            html += `<div class="col-lg-2"></div>`;
        }
    });
    $(".programsContent").html(html);
});
$("#Program1").click();

function isPCFn() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array(
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
    );
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

$(".other").click(function(e) {
    e.stopPropagation();
});
//生成案例
let html = "";
let lastHtml = "";
Object.values(projectDatas).forEach((item, index) => {
    const str = `<div class="portfolio-item">
    <a
        href=".ajax-container"
        data="${item.ProjectName}"
        class="item1"
    >
        <span
            class="thumb-info thumb-info-lighten"
        >
            <span
                class="thumb-info-wrapper"
            >
                <img
                    src="${item.imgSrc}"
                    class="img-fluid border-radius-0"
                    alt=""
                />
                <span
                    class="thumb-info-title"
                >
                    <span
                        class="thumb-info-inner"
                        >${item.ProjectName}</span
                    >
                    <span
                        class="thumb-info-type"
                        >${item.type||'WEBSITE'}</span
                    >
                </span>
                <span
                    class="thumb-info-action"
                >
                    <span
                        class="thumb-info-action-icon bg-dark opacity-8"
                        ><i
                            class="fas fa-plus"
                        ></i
                    ></span>
                </span>
            </span>
        </span>
    </a>
  </div>`;
    if (index == 4) {
        $(".box-portfolio2").html(html);
    }
    if (index >= 4) {
        lastHtml += str;
    }
    html += str;
});
$(".box-portfolio1").html(html);
$(".box-portfolio3").html(lastHtml);