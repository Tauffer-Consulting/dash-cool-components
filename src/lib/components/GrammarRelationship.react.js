import React, { useState, useEffect, useCallback } from 'react'
import LeaderLine from "react-leader-line";
import PropTypes from 'prop-types';


const color_pallete = [
    "rgba(252, 186, 3, 0)",
    "rgba(247, 16, 0, 0)",
    "rgba(0, 247, 86, 0)",
    "rgba(0, 202, 247, 0)",
    "rgba(82, 0, 247, 0)",
    "rgba(247, 0, 235, 0)",
  ]

  
const GrammarRelationship = ({id, data, style, setProps}) => {
    const [tags, setTags] = useState([])
    const [selectedText, setSelectedText] = useState()
    const [lines, setLines] = useState([])

    const removeLines = useCallback(()=>{
        for (var l of lines){
            if (l) {
            l.remove()
            }
        }
    }, [data, lines])

    const handleSpanClick = useCallback((e) => {
        e.preventDefault()
        setSelectedText({
        text: e.currentTarget.innerText,
        id: e.currentTarget.id
        })
        // @todo update background color style ?
        // e.target.style.setProperty('background-color', 'red')
        
    }, [tags])

    useEffect(() => {
        if (!data){ return };
        var newTags = []
        Object.entries(data).forEach(([key, value], index) => {
        const tag = 
            <span
                className='indent'
                onClick={handleSpanClick}
                key={2*index}
                id={`span-tag-${index}`}
                style={{
                    backgroundColor: color_pallete[index],
                    fontSize: "35px",
                    marginLeft: "25px",
                    marginRight: "25px"
                }}
            > 
            {value.text}
            </span>
        newTags.push(tag)
        })
        setTags(newTags);
    }, [data])

    useEffect(()=>{
        if (!data) {return};
        removeLines()
        var auxLines = []
        for (let i=0; i<tags.length; i++) {
        const targetNode = document.getElementById(tags[i].props.id)
        const tokenObj = data[i.toString()];
        if (!tokenObj) {continue;}
        const tokenHead = tokenObj.head

        if (tokenHead !== null) {
            const sourceNode = document.getElementById('span-tag-' + tokenHead.ind);
            var position = 'bottom'
            var gravity = 100;
            if (i % 2 === 0) {
                position = 'top';
                gravity = -100;
            } 
            const lineOptions = {
                path: "fluid",
                startSocket: position,
                endSocket: position,
                size: 4,
                dropShadow: true,
                startSocketGravity: [0, gravity],
                endSocketGravity: [0, gravity],
                middleLabel: LeaderLine.captionLabel(tokenHead.relationship, { color: 'black', fontSize: "25px" }),
            };
            var line = new LeaderLine(
            LeaderLine.mouseHoverAnchor(
                sourceNode,
                'draw',
                {
                animOptions: { duration: 500, timing: 'ease' },
                style: { backgroundColor: 'rgba(0,0,0,0)', backgroundImage: null, color: null },
                hoverStyle: { backgroundColor: 'rgba(0,0,0,0)', backgroundImage: null, color: null }
                }
            ),
            // targetNode,
            LeaderLine.mouseHoverAnchor(
                targetNode,
                'draw',
                {
                animOptions: { duration: 500, timing: 'ease' },
                style: { backgroundColor: 'rgba(0,0,0,0)', backgroundImage: null, color: null },
                hoverStyle: { backgroundColor: 'rgba(0,0,0,0)', backgroundImage: null, color: null }
                }
            ),
            lineOptions
            );
            line.id = "arrow-line-" + i.toString() + '-' + tokenHead.ind
            auxLines.push(line)
        }
        }
        setLines(auxLines)
    }, [tags, data])


    return (
        <div id={id} style={style}>
            {tags}
        </div>
    )
}

GrammarRelationship.defaultProps = {
    data: {},
    style: {
        "display": "flex",
        "justify-content": "center",
        "align-items": "center"
    }
};

GrammarRelationship.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,


    /**
     * The data to be displayed
     */
    data: PropTypes.objectOf(
        PropTypes.shape({
            text: PropTypes.string,
            pos: PropTypes.string,
            head: PropTypes.shape({
                ind: PropTypes.string,
                relationship: PropTypes.string,
                relationshipTag: PropTypes.string
            }),
            posTag: PropTypes.string,
            children: PropTypes.any
        })
    ),
    
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default GrammarRelationship;