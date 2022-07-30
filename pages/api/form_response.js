// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // res.status(200).json({ data: req })
  // res.send( req.body )
  res.send( "<html> <head></head><body><h1>Hobby form</h1><p>nickname:" +req.body.nickname + "</p><p>email: " + req.body.email + "</p><p>phone number: " + req.body.telno + "</p><p>location:" + req.body.location + "</p><p><a href=\"http://dev.saitnewmedia.ca/~gcheng/mmda222/hobby/\">Return to Hobby page</a></p>" + "</body></html>" )
}
