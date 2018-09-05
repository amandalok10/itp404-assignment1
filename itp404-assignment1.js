$('#test').on('submit', function(event){
    event.preventDefault(); 
     $('#results').html('Loading...');
    
    
     let url='https://www.reddit.com/r/' + $('#subreddit').val() + '.json';

let promise = $.ajax ({
    type: 'GET',
    url:  url
});
    

    

promise.then(function(repos){
    console.log('success', repos);
    let html = '';
    
    repos.data.children.forEach(function(repo){
        html += `
        <div>
<h3>${repo.data.title}</h3>
<p>${repo.data.score}</p>
<p>${repo.data.author}</p>

</div>

        `
    });
    
    $('#results').html(html); 
    
}, function(error){
    console.log('error', error); 
});
 });


    
