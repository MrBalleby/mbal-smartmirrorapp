﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SmartMirror.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
