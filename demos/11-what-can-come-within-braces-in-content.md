// content (as in within opening-closing tags)
// string
<div>
    {'Hello'}
</div>

// number
<div>
    {123}
</div>

// boolean, null, undefined
<div>
    {false}
</div>

// React element
<div>
    {<div>Loading</div>}
</div>

// An array of any of these elements
<div>
    {
        [
            123,
            'Hello',
            false,
            <div>Item 1</div>,
            <div>Item 2</div>,
            <div>Item 3</div>
        ]
    }
</div>