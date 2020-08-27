

export const Launch =(launch) => {
    const launchC= document.createElement('div')
    launchC.className='launch'
    
    const div0= document.createElement('div')
    div0.className='inner-div-0'

    const image= document.createElement('img')
    image.src=launch.links.mission_patch
    div0.appendChild(image)

    const div1= document.createElement('div')
    div1.className='inner-div-1'

    const span1= document.createElement('span')
    span1.textContent=launch.rocket.rocket_name
    div1.appendChild(span1)

    const div2 = document.createElement('div')
    div1.className="inner-div-2"
    launchC.append(div0,div1,div2)

    const span2 = document.createElement('span')
    span2.textContent=launch.launch_year
    div2.appendChild(span2)

    return launchC
}