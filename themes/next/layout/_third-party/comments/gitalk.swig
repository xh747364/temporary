{% if page.comments && theme.gitalk.enable %}
  <link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
  <script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
  <script src="https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.min.js"></script>
  <div id="gitalk-container"></div>
  <script type="text/javascript">
    var gitalk = new Gitalk({
      clientID: '{{ theme.gitalk.clientID }}',
      clientSecret: '{{ theme.gitalk.clientSecret }}',
      repo: '{{ theme.gitalk.repo }}',
      owner: '{{ theme.gitalk.owner }}',
      admin: ['{{ theme.gitalk.admin }}'],
      id: md5(location.pathname),
      distractionFreeMode: '{{ theme.gitalk.distractionFreeMode }}'
    })
    gitalk.render('gitalk-container')
  </script>
{% endif %}
